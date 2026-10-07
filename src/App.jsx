import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ReferEarnPage from './pages/ReferEarnPage';
import SwapCenterPage from './pages/SwapCenterPage';
import BonusVEsPage from './pages/BonusVEsPage';
import CaptchaTasksPage from './pages/CaptchaTasksPage';
import ExchangeCenterPage from './pages/ExchangeCenterPage';
import HowItWorksPage from './pages/HowItWorksPage';
import NotFoundPage from './pages/NotFoundPage';
import ScrollToTop from './components/ScrollToTop';
import { Toaster } from 'react-hot-toast';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Toaster position="bottom-right" toastOptions={{ style: { background: '#ffffff', color: '#0f172a', border: '1px solid #e2e8f0' } }} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/refer-earn" element={<ReferEarnPage />} />
        <Route path="/swap-center" element={<SwapCenterPage />} />
        <Route path="/bonus-ves" element={<BonusVEsPage />} />
        <Route path="/captcha-tasks" element={<CaptchaTasksPage />} />
        <Route path="/exchange-center" element={<ExchangeCenterPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
