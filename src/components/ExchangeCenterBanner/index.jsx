import React from 'react';
import { useNavigate } from 'react-router-dom';
import BannerWrapper from '../BannerWrapper';
import styles from './ExchangeCenterBanner.module.css';
import { Wallet, RefreshCw } from 'lucide-react';
import exchangeArt from '../../assets/images/exchange-center-art.png';

const ExchangeCenterBanner = () => {
  const navigate = useNavigate();

  return (
    <BannerWrapper className={styles.wrapper}>
      {/* Ambient background glows */}
      <div className={styles.glowPurple}></div>
      <div className={styles.glowGold}></div>

      <div className={styles.container}>
        {/* Left Typography & CTA Content */}
        <div className={styles.content}>
          <div className={styles.badge}>
            <Wallet size={13} className={styles.badgeIcon} />
            <span>REDEMPTION UTILITY</span>
          </div>

          <h2 className={styles.heading}>
            Convert <span className={styles.gemHighlight}>Gems</span> to <span className={styles.veHighlight}>VEs</span>
          </h2>

          <p className={styles.description}>
            Exchange eligible Gems into VEs and grow your VE balance.
          </p>

          <button 
            className={styles.goldCta} 
            onClick={() => navigate('/exchange-center')}
            aria-label="Open exchange center"
          >
            <span>OPEN EXCHANGE CENTER</span>
          </button>

          {/* Process Flow Badge matching reference: GEM .....> CONVERT .....> VE */}
          <div className={styles.flowBadge}>
            <div className={styles.flowItem}>
              <span className={styles.flowGemIcon}>💎</span>
              <span className={styles.flowLabel}>GEM</span>
            </div>
            <span className={styles.flowDots}>.....&gt;</span>
            <div className={styles.flowItem}>
              <div className={styles.convertCircle}>
                <RefreshCw size={11} />
              </div>
              <span className={styles.flowLabel}>CONVERT</span>
            </div>
            <span className={styles.flowDots}>.....&gt;</span>
            <div className={styles.flowItem}>
              <div className={styles.veCoinCircle}>VE</div>
              <span className={styles.flowLabel}>VE</span>
            </div>
          </div>
        </div>

        {/* Right 3D Visual Art (GEM Glass Card -> Glowing Exchange Beam -> VE Gold Card) */}
        <div className={styles.visualWrapper} onClick={() => navigate('/exchange-center')}>
          <div className={styles.artContainer}>
            <img 
              src={exchangeArt} 
              alt="Convert Gems to VEs glass card, conversion beam and gold card" 
              className={styles.heroArt}
            />
          </div>
        </div>
      </div>
    </BannerWrapper>
  );
};

export default ExchangeCenterBanner;
