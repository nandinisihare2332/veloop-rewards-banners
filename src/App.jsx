import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ReferEarnPage from './pages/ReferEarnPage';
import SwapCenterPage from './pages/SwapCenterPage';
import BonusVEsPage from './pages/BonusVEsPage';
import CaptchaTasksPage from './pages/CaptchaTasksPage';
import ExchangeCenterPage from './pages/ExchangeCenterPage';
import NotFoundPage from './pages/NotFoundPage';
import { Toaster } from 'react-hot-toast';
import './App.css';

function App() {
  return (
    <Router>
      <Toaster position="bottom-right" toastOptions={{ style: { background: '#1e293b', color: '#fff', border: '1px solid #334155' } }} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/refer-earn" element={<ReferEarnPage />} />
        <Route path="/swap-center" element={<SwapCenterPage />} />
        <Route path="/bonus-ves" element={<BonusVEsPage />} />
        <Route path="/captcha-tasks" element={<CaptchaTasksPage />} />
        <Route path="/exchange-center" element={<ExchangeCenterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
