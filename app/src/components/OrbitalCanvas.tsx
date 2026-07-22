import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

const RING_CONFIG = [
  { radius: 4.0, tube: 0.015, color: '#00D0B8', emissiveIntensity: 0.4 },
  { radius: 3.2, tube: 0.012, color: '#00AEEF', emissiveIntensity: 0.3 },
  { radius: 2.4, tube: 0.010, color: '#D9DDE2', emissiveIntensity: 0.15 },
  { radius: 1.6, tube: 0.008, color: '#00AEEF', emissiveIntensity: 0.25 },
  { radius: 0.8, tube: 0.006, color: '#00D0B8', emissiveIntensity: 0.35 },
];

const ROTATION_SPEEDS = [0.3, -0.5, 0.7, -0.9, 1.2];

export function OrbitalCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const composerRef = useRef<EffectComposer | null>(null);
  const ringsRef = useRef<THREE.Mesh[]>([]);
  const timeRef = useRef(0);
  const animFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const isMobile = window.innerWidth < 768;
    const scale = isMobile ? 0.6 : 1;
    const bloomStrength = isMobile ? 0.4 : 0.6;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(
      -5 * (window.innerWidth / window.innerHeight),
      5 * (window.innerWidth / window.innerHeight),
      5,
      -5,
      0.1,
      100
    );
    camera.position.set(0, 0, 10);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current = renderer;

    // Create rings
    const rings: THREE.Mesh[] = [];
    RING_CONFIG.forEach((config) => {
      const geometry = new THREE.TorusGeometry(
        config.radius * scale,
        config.tube * scale,
        16,
        100
      );
      const material = new THREE.MeshStandardMaterial({
        color: new THREE.Color(config.color),
        emissive: new THREE.Color(config.color),
        emissiveIntensity: config.emissiveIntensity,
        roughness: 0.4,
        metalness: 0.8,
        transparent: true,
        opacity: 0.7,
      });
      const ring = new THREE.Mesh(geometry, material);
      scene.add(ring);
      rings.push(ring);
    });
    ringsRef.current = rings;

    // Post-processing
    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      bloomStrength,
      0.5,
      0.85
    );
    composer.addPass(bloomPass);
    composerRef.current = composer;

    // Animation loop
    const animate = () => {
      if (document.hidden) {
        animFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      timeRef.current += 0.002;
      const time = timeRef.current;

      rings.forEach((ring, i) => {
        ring.rotation.z = time * ROTATION_SPEEDS[i];
      });

      camera.position.x = Math.sin(time * 0.1) * 0.5;
      camera.position.y = Math.cos(time * 0.1) * 0.5;
      camera.lookAt(0, 0, 0);

      composer.render();
      animFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      camera.left = -5 * (width / height);
      camera.right = 5 * (width / height);
      camera.top = 5;
      camera.bottom = -5;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
      composer.setSize(width, height);
    };

    let resizeTimeout: ReturnType<typeof setTimeout>;
    const debouncedResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResize, 150);
    };

    window.addEventListener('resize', debouncedResize);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener('resize', debouncedResize);
      rings.forEach((ring) => {
        ring.geometry.dispose();
        (ring.material as THREE.Material).dispose();
      });
      renderer.dispose();
      composer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}
