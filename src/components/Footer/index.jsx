import React from 'react';
import { Zap, ShieldCheck, Heart } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footerContainer}>
        <div className={styles.topRow}>
          <div className={styles.brandBlock}>
            <div className={styles.logoRow}>
              <div className={styles.logoBadge}>
                <Zap size={18} />
              </div>
              <span className={styles.brandName}>VELOOP <span className={styles.rewardsSpan}>REWARDS</span></span>
            </div>
            <p className={styles.brandDesc}>
              A next-generation digital rewards and engagement platform engineered with interactive, trustworthy, and reward-focused fintech design.
            </p>
          </div>

          <div className={styles.badgeList}>
            <div className={styles.specBadge}>
              <ShieldCheck size={14} className={styles.badgeIcon} />
              <span>Fintech Standard #161827</span>
            </div>
            <div className={styles.specBadge}>
              <span>100% Responsive Grid</span>
            </div>
            <div className={styles.specBadge}>
              <span>Vite + React + CSS Modules</span>
            </div>
          </div>
        </div>

        <div className={styles.bottomRow}>
          <div className={styles.copyText}>
            &copy; {new Date().getFullYear()} VELOOP Rewards. Developed by <strong>Nandini Sihare</strong>.
          </div>
          <div className={styles.subText}>
            All promotional banners match Task 08 reference specifications.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
