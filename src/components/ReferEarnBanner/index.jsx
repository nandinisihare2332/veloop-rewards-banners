import React from 'react';
import { useNavigate } from 'react-router-dom';
import BannerWrapper from '../BannerWrapper';
import styles from './ReferEarnBanner.module.css';
import { ArrowRight, Gift, Share2, Copy } from 'lucide-react';

const ReferEarnBanner = () => {
  const navigate = useNavigate();
  return (
    <BannerWrapper className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <Share2 size={14} className={styles.badgeIcon} />
            <span>REFER & EARN</span>
          </div>
          <h2 className={styles.heading}>
            Refer Friends,<br/>
            <span className={styles.headingHighlight}>Earn Rewards</span>
          </h2>
          <p className={styles.description}>
            Invite your friends to VELOOP Rewards and earn exciting rewards together when they complete eligible activities.
          </p>
          <div className={styles.ctaGroup}>
            <button className={styles.cta} onClick={() => navigate('/refer-earn')}>
              <span>Invite Now</span>
              <ArrowRight size={16} />
            </button>
            <button className={styles.secondaryCta}>
              <span>How It Works</span>
            </button>
          </div>
        </div>
        
        <div className={styles.visualArea}>
          <div className={styles.giftIcon}>
            <Gift size={64} className={styles.iconElement} />
            <div className={styles.sparkle1}>?</div>
            <div className={styles.sparkle2}>?</div>
            <div className={styles.sparkle3}>?</div>
          </div>
          
          <div className={styles.referralCodeBox}>
            <div className={styles.referralLabel}>YOUR REFERRAL CODE</div>
            <div className={styles.referralCode}>
              VELOOP123 <Copy size={16} className={styles.copyIcon} />
            </div>
          </div>
          
          <div className={styles.statsBox}>
            <div className={styles.stat}>
              <span className={styles.statLabel}>You Earn</span>
              <span className={styles.statValue}>500 VEs</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.stat}>
              <span className={styles.statLabel}>Friend Gets</span>
              <span className={styles.statValue}>200 VEs</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.footer}>
        <div className={styles.footerItem}>
          <Share2 size={16} className={styles.footerIcon} />
          <div>
            <div className={styles.footerTitle}>Easy to Share</div>
            <div className={styles.footerDesc}>Share your link or code in just one click.</div>
          </div>
        </div>
        <div className={styles.footerItem}>
          <Gift size={16} className={styles.footerIcon} />
          <div>
            <div className={styles.footerTitle}>Instant Rewards</div>
            <div className={styles.footerDesc}>Earn VEs instantly when friends join.</div>
          </div>
        </div>
      </div>
    </BannerWrapper>
  );
};

export default ReferEarnBanner;
