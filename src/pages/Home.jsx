import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import EarningsSimulator from '../components/EarningsSimulator';
import CategoryFilter from '../components/CategoryFilter';
import ReferEarnBanner from '../components/ReferEarnBanner';
import BonusVEsBanner from '../components/BonusVEsBanner';
import SwapCenterBanner from '../components/SwapCenterBanner';
import CaptchaTasksBanner from '../components/CaptchaTasksBanner';
import ExchangeCenterBanner from '../components/ExchangeCenterBanner';
import Footer from '../components/Footer';
import '../App.css';

function Home() {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <div style={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      <main className="app-container page-transition">
        {/* Hero Section matching screenshot branding */}
        <HeroSection />

        {/* Interactive Earnings Simulator */}
        <EarningsSimulator />

        {/* Categories Buttons filter matching supervisor feedback */}
        <div id="banners" style={{ width: '100%', textAlign: 'center', marginTop: '10px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
            Promotional & Feature Banners
          </h2>
          <p style={{ fontSize: '0.92rem', color: '#475569', marginBottom: '16px' }}>
            Explore VELOOP Rewards earning programs, conversion utilities, and redemption systems.
          </p>
          <CategoryFilter 
            activeCategory={activeCategory} 
            onSelectCategory={setActiveCategory} 
          />
        </div>

        {/* Filtered Banner List */}
        {(activeCategory === 'all' || activeCategory === 'refer') && (
          <div style={{ width: '100%' }}>
            <ReferEarnBanner />
          </div>
        )}

        {(activeCategory === 'all' || activeCategory === 'bonus') && (
          <div style={{ width: '100%' }}>
            <BonusVEsBanner />
          </div>
        )}

        {(activeCategory === 'all' || activeCategory === 'swap') && (
          <div style={{ width: '100%' }}>
            <SwapCenterBanner />
          </div>
        )}

        {(activeCategory === 'all' || activeCategory === 'captcha') && (
          <div style={{ width: '100%' }}>
            <CaptchaTasksBanner />
          </div>
        )}

        {(activeCategory === 'all' || activeCategory === 'exchange') && (
          <div style={{ width: '100%' }}>
            <ExchangeCenterBanner />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default Home;
