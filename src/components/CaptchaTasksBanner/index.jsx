import React from 'react';
import { useNavigate } from 'react-router-dom';
import BannerWrapper from '../BannerWrapper';
import styles from './CaptchaTasksBanner.module.css';
import { ShieldCheck, ArrowRight, Check } from 'lucide-react';
import captchaArt from '../../assets/images/captcha-tasks-art.png';

const CaptchaTasksBanner = () => {
  const navigate = useNavigate();

  return (
    <BannerWrapper className={styles.wrapper}>
      {/* Ambient background glows */}
      <div className={styles.glowPurple}></div>
      <div className={styles.glowBlue}></div>

      <div className={styles.container}>
        {/* Left Typography & CTA Content */}
        <div className={styles.content}>
          <div className={styles.badge}>
            <ShieldCheck size={13} className={styles.badgeIcon} />
            <span>ACCURACY REWARDS</span>
          </div>

          <h2 className={styles.heading}>
            Solve Captchas.<br />
            <span className={styles.headingHighlight}>Earn Gems.</span>
          </h2>

          <p className={styles.description}>
            Complete simple captcha tasks accurately and earn eligible Gem rewards.
          </p>

          <button 
            className={styles.goldCta} 
            onClick={() => navigate('/captcha-tasks')}
            aria-label="Start captcha task"
          >
            <span className={styles.doubleArrow}>&gt;&gt;</span>
            <span>START TASK</span>
          </button>

          {/* Process Flow Badge matching reference: [K7M4] ---> [✓] ---> [💎] */}
          <div className={styles.flowBadge}>
            <div className={styles.captchaSample}>K7M4</div>
            <span className={styles.flowArrow}>---&gt;</span>
            <div className={styles.checkCircle}>
              <Check size={11} strokeWidth={3} />
            </div>
            <span className={styles.flowArrow}>---&gt;</span>
            <div className={styles.gemIcon}>💎</div>
          </div>
        </div>

        {/* Right 3D Visual Art (Terminal Device + CRT Captcha Screen + Flying Purple Crystals) */}
        <div className={styles.visualWrapper} onClick={() => navigate('/captcha-tasks')}>
          <div className={styles.artContainer}>
            <img 
              src={captchaArt} 
              alt="Solve Captchas, Earn Gems terminal device with crystal gemstones" 
              className={styles.heroArt}
            />
          </div>
        </div>
      </div>
    </BannerWrapper>
  );
};

export default CaptchaTasksBanner;
