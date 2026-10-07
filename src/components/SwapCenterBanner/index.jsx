import React from 'react';
import { useNavigate } from 'react-router-dom';
import BannerWrapper from '../BannerWrapper';
import styles from './SwapCenterBanner.module.css';
import { RefreshCw, ChevronRight } from 'lucide-react';
import swapArt from '../../assets/images/swap-center-art.png';

const SwapCenterBanner = () => {
  const navigate = useNavigate();

  return (
    <BannerWrapper className={styles.wrapper}>
      {/* Ambient background glows */}
      <div className={styles.glowBlue}></div>
      <div className={styles.glowAmber}></div>

      <div className={styles.container}>
        {/* Left Typography & CTA Content */}
        <div className={styles.content}>
          <div className={styles.badge}>
            <RefreshCw size={13} className={styles.badgeIcon} />
            <span>CURRENCY SWAP</span>
          </div>

          <h2 className={styles.heading}>
            Swap Center
          </h2>

          <p className={styles.description}>
            Convert eligible reward balances between supported currencies.
          </p>

          <button 
            className={styles.goldCta} 
            onClick={() => navigate('/swap-center')}
            aria-label="Open swap center"
          >
            <span>OPEN SWAP CENTER</span>
            <ChevronRight size={18} className={styles.chevronIcon} />
          </button>
        </div>

        {/* Right 3D Visual Art (Wallet Phone + VE Card + SVE Card + Glowing Swap Portal) */}
        <div className={styles.visualWrapper} onClick={() => navigate('/swap-center')}>
          <div className={styles.artContainer}>
            <img 
              src={swapArt} 
              alt="Swap Center 3D Currency Cards, VE and SVE balances and conversion vortex" 
              className={styles.heroArt}
            />
          </div>
        </div>
      </div>
    </BannerWrapper>
  );
};

export default SwapCenterBanner;
