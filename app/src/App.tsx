import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { OrbitalCanvas } from '@/components/OrbitalCanvas';
import { PageLayout } from '@/components/PageLayout';
import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { Domains } from '@/pages/Domains';
import { Fellowships } from '@/pages/Fellowships';
import { Consultancy } from '@/pages/Consultancy';
import { Contact } from '@/pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <PageLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/domains" element={<Domains />} />
          <Route path="/fellowships" element={<Fellowships />} />
          <Route path="/consultancy" element={<Consultancy />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </PageLayout>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <OrbitalCanvas />
      <AppRoutes />
    </BrowserRouter>
  );
}
