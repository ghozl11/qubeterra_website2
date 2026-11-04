import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { PageLayout } from '@/components/PageLayout';
import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { Domains } from '@/pages/Domains';
import { Fellowships } from '@/pages/Fellowships';
import AINextGen from '@/pages/AINextGen';
import NextGenGraduatesPage from '@/pages/NextGenGraduatesPage';
import NextGenAchievements from '@/pages/NextGenAchievements';
import { Consultancy } from '@/pages/Consultancy';
import { Contact } from '@/pages/Contact';
import { DecisionLabs } from '@/pages/DecisionLabs';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AppRoutes() {
  return <><ScrollToTop /><PageLayout><Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/domains" element={<Domains />} />
    <Route path="/fellowships" element={<Fellowships />} />
    <Route path="/fellowships/ai-nextgen" element={<AINextGen />} />
    <Route path="/nextgen-ai-fellowship-2026-graduates" element={<NextGenGraduatesPage />} />
    <Route path="/nextgen-ai-fellowship-2026-achievements" element={<NextGenAchievements />} />
    <Route path="/consultancy" element={<Consultancy />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/decision-labs" element={<DecisionLabs page="overview" />} />
    <Route path="/decision-labs/industries/manufacturing" element={<DecisionLabs page="manufacturing" />} />
    <Route path="/decision-labs/industries/fintech" element={<DecisionLabs page="fintech" />} />
    <Route path="/decision-labs/industries/healthcare" element={<DecisionLabs page="healthcare" />} />
    <Route path="/decision-labs/industries/policy" element={<DecisionLabs page="policy" />} />
    <Route path="/decision-labs/industries/consumer" element={<DecisionLabs page="consumer" />} />
  </Routes></PageLayout></>;
}

export default function App() {
  return <BrowserRouter><AppRoutes /></BrowserRouter>;
}
