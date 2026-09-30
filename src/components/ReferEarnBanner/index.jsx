import React from 'react';
import { useNavigate } from 'react-router-dom';
import BannerWrapper from '../BannerWrapper';
import styles from './ReferEarnBanner.module.css';
import { ArrowRight, Gift, Copy, Share2, Info, Users, Sparkles } from 'lucide-react';

const ReferEarnBanner = () => {
  const navigate = useNavigate();
  return (
    <BannerWrapper className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <Users size={14} className={styles.badgeIcon} />
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
              Invite Now <ArrowRight size={18} className={styles.ctaIcon} />
            </button>
            <button className={styles.secondaryCta} onClick={(e) => e.preventDefault()}>
              <Info size={16} /> How It Works
            </button>
          </div>
        </div>
        
        <div className={styles.visualArea}>
          <div className={styles.glowEffect}></div>
          <div className={styles.illustration}>
            <div className={styles.referralCodeCard}>
              <span className={styles.codeLabel}>Your Referral Code</span>
              <div className={styles.codeBox}>
                <span className={styles.codeText}>VELOOP123</span>
                <button className={styles.copyBtn} aria-label="Copy Code">
                  <Copy size={14} />
                </button>
              </div>
            </div>
            
            <div className={styles.giftContainer}>
              <Gift size={80} className={styles.giftIcon} strokeWidth={1.5} />
              <Sparkles size={24} className={styles.sparkle1} />
              <Sparkles size={18} className={styles.sparkle2} />
            </div>

            <div className={styles.rewardCard}>
              <div className={styles.rewardInfo}>
                <span className={styles.rewardTitle}>You Earn</span>
                <span className={styles.rewardValue}>500 VEs</span>
              </div>
              <div className={styles.rewardDivider}></div>
              <div className={styles.rewardInfo}>
                <span className={styles.rewardTitle}>Friend Gets</span>
                <span className={styles.rewardValue}>200 VEs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.features}>
          <div className={styles.featureItem}>
             <Share2 size={16} className={styles.featureIcon}/>
             <div className={styles.featureText}>
                <strong>Easy to Share</strong>
                <span>Share your link or code in just one click.</span>
             </div>
          </div>
          <div className={styles.featureItem}>
             <Gift size={16} className={styles.featureIcon}/>
             <div className={styles.featureText}>
                <strong>Instant Rewards</strong>
                <span>Earn VEs instantly when friends join.</span>
             </div>
          </div>
      </div>
    </BannerWrapper>
  );
};

export default ReferEarnBanner;
