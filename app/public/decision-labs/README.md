# Qubeterra Decision Labs: static website

Plain HTML/CSS/JS. No build step.

## Pages
- index.html: home (hero, Cairo Decision Map, mission, trust, engagement models, forms)
- manufacturing.html: production-line and supply-chain scenarios
- fintech.html: merchant segments and digital payments
- healthcare.html: hospital patient-flow and facility-access scenarios
- policy.html: policy alternatives and consultation design
- consumer.html: simulated survey and focus group for product concepts

## Run locally
`python3 -m http.server 8000` in this folder, then open http://localhost:8000

## Deploy (any static host)
- Netlify: drag this folder onto app.netlify.com/drop
- Cloudflare Pages / Vercel / GitHub Pages: connect a repo, no build command, publish directory `/`
- Then attach your domain, and replace YOUR-DOMAIN in robots.txt and sitemap.xml.

## Forms
The demo and meeting forms use the Qubeterra Institute Formspree endpoint configured
in `config.js`, so submitted enquiries are delivered to the team's configured inbox.
If the endpoint changes, replace it with another URL that accepts JSON POSTs and
update the privacy notice before collecting sensitive information.

## What is real and what is illustrative
Real: pages, navigation, responsive layout, reduced-motion support, and form code connected to Formspree.
Illustrative: every map, simulation, persona, segment and number. All data is invented,
and no simulation is a validated model or real research. Keep those labels when editing.
Not built yet: Nature AI Labs page, backend, analytics, privacy policy text.

Integrated into the parent Qubeterra.tech application at /decision-labs.
