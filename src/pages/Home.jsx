import React from 'react';
import ReferEarnBanner from '../components/ReferEarnBanner';
import SwapCenterBanner from '../components/SwapCenterBanner';
import BonusVEsBanner from '../components/BonusVEsBanner';
import CaptchaTasksBanner from '../components/CaptchaTasksBanner';
import ExchangeCenterBanner from '../components/ExchangeCenterBanner';
import '../App.css';

function Home() {
  return (
    <div className="app-container page-transition">
      <ReferEarnBanner />
      <div className="arrow-down">?</div>
      
      <BonusVEsBanner />
      <div className="arrow-down">?</div>
      
      <SwapCenterBanner />
      <div className="arrow-down">?</div>
      
      <CaptchaTasksBanner />
      <div className="arrow-down">?</div>
      
      <ExchangeCenterBanner />
    </div>
  );
}

export default Home;
