import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BannerWrapper from '../BannerWrapper';
import styles from './ReferEarnBanner.module.css';
import { ArrowRight, Gift, Share2, Copy, Check, Zap, ShieldCheck, Trophy } from 'lucide-react';
import toast from 'react-hot-toast';
import referArt from '../../assets/images/refer-earn-art.png';

const ReferEarnBanner = () => {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const handleCopyCode = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText('VELOOP123');
    setCopied(true);
    toast.success('Referral code VELOOP123 copied to clipboard!');
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <BannerWrapper className={styles.wrapper}>
      {/* Ambient background glows */}
      <div className={styles.glowBlue}></div>
      <div className={styles.glowPurple}></div>

      {/* Main Top Area: Left Content + Right 3D Visual */}
      <div className={styles.mainArea}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <Share2 size={13} className={styles.badgeIcon} />
            <span>REFER & EARN</span>
          </div>

          <h2 className={styles.heading}>
            Refer Friends,<br />
            <span className={styles.headingHighlight}>Earn Rewards</span>
          </h2>

          <p className={styles.description}>
            Invite your friends to VELOOP Rewards and earn exciting rewards together.
          </p>

          <div className={styles.ctaGroup}>
            <button 
              className={styles.primaryCta} 
              onClick={() => navigate('/refer-earn')}
              aria-label="Invite friends now"
            >
              <span>Invite Now</span>
              <ArrowRight size={16} className={styles.arrowIcon} />
            </button>
            <button 
              className={styles.secondaryCta} 
              onClick={() => navigate('/how-it-works')}
              aria-label="Learn how referral works"
            >
              <Gift size={16} className={styles.giftIcon} />
              <span>How It Works</span>
            </button>
          </div>
        </div>

        {/* Right 3D Hero Art matching Reference */}
        <div className={styles.visualWrapper} onClick={() => navigate('/refer-earn')}>
          <div className={styles.artContainer}>
            <img 
              src={referArt} 
              alt="Refer Friends, Earn Rewards illustration with gift box and characters" 
              className={styles.heroArt}
            />
            {/* Interactive Quick Copy Trigger on the Art's Referral Code area */}
            <button 
              type="button"
              className={styles.quickCopyBtn} 
              onClick={handleCopyCode}
              title="Click to copy referral code VELOOP123"
              aria-label="Copy code VELOOP123"
            >
              {copied ? <Check size={14} color="#34d399" /> : <Copy size={14} />}
              <span>{copied ? 'Copied!' : 'Copy Code'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom 4 Feature Cards Bar matching reference */}
      <div className={styles.footerBar}>
        <div className={styles.featureCard}>
          <div className={`${styles.featureIconWrap} ${styles.blueWrap}`}>
            <Zap size={16} className={styles.featureIcon} />
          </div>
          <div className={styles.featureInfo}>
            <div className={styles.featureTitle}>Easy to Share</div>
            <div className={styles.featureDesc}>Share your link or code in just one click.</div>
          </div>
        </div>

        <div className={styles.featureCard}>
          <div className={`${styles.featureIconWrap} ${styles.purpleWrap}`}>
            <Gift size={16} className={styles.featureIcon} />
          </div>
          <div className={styles.featureInfo}>
            <div className={styles.featureTitle}>Instant Rewards</div>
            <div className={styles.featureDesc}>Earn VEs instantly when friends join.</div>
          </div>
        </div>

        <div className={styles.featureCard}>
          <div className={`${styles.featureIconWrap} ${styles.tealWrap}`}>
            <ShieldCheck size={16} className={styles.featureIcon} />
          </div>
          <div className={styles.featureInfo}>
            <div className={styles.featureTitle}>100% Secure</div>
            <div className={styles.featureDesc}>Secure referrals and real reward tracking.</div>
          </div>
        </div>

        <div className={styles.featureCard}>
          <div className={`${styles.featureIconWrap} ${styles.amberWrap}`}>
            <Trophy size={16} className={styles.featureIcon} />
          </div>
          <div className={styles.featureInfo}>
            <div className={styles.featureTitle}>Unlimited Earning</div>
            <div className={styles.featureDesc}>Invite more friends and earn more VEs.</div>
          </div>
        </div>
      </div>
    </BannerWrapper>
  );
};

export default ReferEarnBanner;
