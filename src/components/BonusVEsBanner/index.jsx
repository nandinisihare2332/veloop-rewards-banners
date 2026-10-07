import React from 'react';
import { useNavigate } from 'react-router-dom';
import BannerWrapper from '../BannerWrapper';
import styles from './BonusVEsBanner.module.css';
import { ArrowRight, Sparkles } from 'lucide-react';
import bonusArt from '../../assets/images/bonus-ves-art.png';

const BonusVEsBanner = () => {
  const navigate = useNavigate();

  return (
    <BannerWrapper className={styles.wrapper}>
      {/* Ambient background glows */}
      <div className={styles.glowGold}></div>
      <div className={styles.glowBlue}></div>
      <div className={styles.gridOverlay}></div>

      <div className={styles.container}>
        {/* Left Typography & CTA Content */}
        <div className={styles.content}>
          <div className={styles.badge}>
            <Sparkles size={13} className={styles.badgeIcon} />
            <span>BONUS OPPORTUNITY</span>
          </div>

          <h2 className={styles.heading}>
            Boost Your<br />
            <span className={styles.headingHighlight}>VE Balance</span>
          </h2>

          <div className={styles.accentDivider}>
            <span>&gt;&gt;&gt;</span>
          </div>

          <p className={styles.description}>
            Complete eligible activities and unlock additional VEs through special bonus opportunities.
          </p>

          <button 
            className={styles.goldCta} 
            onClick={() => navigate('/bonus-ves')}
            aria-label="Explore bonus opportunities"
          >
            <span>EXPLORE BONUSES</span>
            <div className={styles.arrowCircle}>
              <ArrowRight size={14} className={styles.arrowIcon} />
            </div>
          </button>
        </div>

        {/* Right 3D Visual Art (Frosted Activity Flows + Hologram VE Pedestal + Coin Vault) */}
        <div className={styles.visualWrapper} onClick={() => navigate('/bonus-ves')}>
          <div className={styles.artContainer}>
            <img 
              src={bonusArt} 
              alt="Boost Your VE Balance 3D Hologram Pedestal, Activity flows, and Coin Vault" 
              className={styles.heroArt}
            />
          </div>
        </div>
      </div>
    </BannerWrapper>
  );
};

export default BonusVEsBanner;
