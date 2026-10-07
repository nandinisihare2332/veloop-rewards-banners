import React from 'react';
import { Zap, ShieldCheck, Users, Star, ArrowRight } from 'lucide-react';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.heroWrapper}>
      {/* Top Pill Tag */}
      <div className={styles.topBadge}>
        <span className={styles.pulseDot}></span>
        <span className={styles.badgeText}>Next-Gen Digital Rewards Platform</span>
        <span className={styles.versionTag}>VEs 2.0</span>
      </div>

      {/* Main Headline */}
      <h1 className={styles.heroHeading}>
        Turn Daily Screen Time Into{' '}
        <span className={styles.purpleHighlight}>Instant Cash</span>{' '}
        <span className={styles.amberHighlight}>Rewards.</span>
      </h1>

      {/* Subtitle */}
      <p className={styles.heroSubtitle}>
        VELOOP Rewards is the trusted platform where digital activities earn you{' '}
        <strong>VEs (Veloop Earnings)</strong> — cashed out programmatically via UPI, PayPal, or Gift Cards.
      </p>

      {/* Action Buttons */}
      <div className={styles.heroCtas}>
        <a href="#banners" className={styles.primaryBtn}>
          <span>Start Earning Free</span>
          <Zap size={16} className={styles.btnZap} />
        </a>
        <a href="#simulator" className={styles.secondaryBtn}>
          <span>Try Simulator</span>
          <ArrowRight size={16} />
        </a>
      </div>

      {/* 4 Trust Metric Cards in 2x2 / 4-column Grid */}
      <div className={styles.trustGrid}>
        <div className={styles.trustCard}>
          <div className={`${styles.iconWrap} ${styles.amberIcon}`}>
            <Zap size={18} />
          </div>
          <div className={styles.trustInfo}>
            <div className={styles.trustValue}>&lt; 2 Mins</div>
            <div className={styles.trustLabel}>Avg Payout Speed</div>
          </div>
        </div>

        <div className={styles.trustCard}>
          <div className={`${styles.iconWrap} ${styles.tealIcon}`}>
            <ShieldCheck size={18} />
          </div>
          <div className={styles.trustInfo}>
            <div className={styles.trustValue}>256-Bit</div>
            <div className={styles.trustLabel}>SSL Encryption</div>
          </div>
        </div>

        <div className={styles.trustCard}>
          <div className={`${styles.iconWrap} ${styles.blueIcon}`}>
            <Users size={18} />
          </div>
          <div className={styles.trustInfo}>
            <div className={styles.trustValue}>10,000+</div>
            <div className={styles.trustLabel}>Veloopers*</div>
          </div>
        </div>

        <div className={styles.trustCard}>
          <div className={`${styles.iconWrap} ${styles.goldIcon}`}>
            <Star size={18} />
          </div>
          <div className={styles.trustInfo}>
            <div className={styles.trustValue}>4.9 / 5.0</div>
            <div className={styles.trustLabel}>User Rating</div>
          </div>
        </div>
      </div>

      <div className={styles.footnote}>
        *Illustrative community benchmark placeholder
      </div>
    </section>
  );
};

export default HeroSection;
