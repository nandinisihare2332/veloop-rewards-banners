import React from 'react';
import { useNavigate } from 'react-router-dom';
import BannerWrapper from '../BannerWrapper';
import styles from './BonusVEsBanner.module.css';
import { ArrowRight, Sparkles, TrendingUp, Calendar, Users, Target } from 'lucide-react';

const BonusVEsBanner = () => {
  const navigate = useNavigate();
  return (
    <BannerWrapper className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <Sparkles size={14} className={styles.badgeIcon} />
            <span>BONUS</span>
          </div>
          <h2 className={styles.heading}>
            Boost Your<br/>
            <span className={styles.headingHighlight}>VE Balance</span>
          </h2>
          <p className={styles.description}>
            Complete eligible activities and unlock additional VEs through special bonus opportunities.
          </p>
          <button className={styles.cta} onClick={() => navigate('/bonus-ves')}>
            EXPLORE BONUSES <ArrowRight size={18} className={styles.ctaIcon} />
          </button>
        </div>
        
        <div className={styles.visualArea}>
           <div className={styles.bonusCircle}>
              <span className={styles.bonusText}>BONUS</span>
              <span className={styles.veText}>VE</span>
           </div>

           <div className={styles.vault}>
              <div className={styles.vaultDoor}>
                 <div className={styles.handle}></div>
              </div>
              <div className={styles.coinsContainer}>
                 <div className={`${styles.coin} ${styles.coin1}`}>VE</div>
                 <div className={`${styles.coin} ${styles.coin2}`}>VE</div>
                 <div className={`${styles.coin} ${styles.coin3}`}>VE</div>
              </div>
           </div>

           <div className={styles.activitiesList}>
              <div className={styles.activityItem}>
                 <div className={styles.activityIconWrap}>
                    <Calendar size={14} color="#60a5fa" />
                 </div>
                 <div className={styles.activityText}>
                    <span className={styles.activityTitle}>Daily Check-in</span>
                    <span className={styles.activitySub}>Stay active</span>
                 </div>
              </div>
              <div className={styles.activityItem}>
                 <div className={styles.activityIconWrap}>
                    <Users size={14} color="#c084fc" />
                 </div>
                 <div className={styles.activityText}>
                    <span className={styles.activityTitle}>Invite Friends</span>
                    <span className={styles.activitySub}>Grow together</span>
                 </div>
              </div>
              <div className={styles.activityItem}>
                 <div className={styles.activityIconWrap}>
                    <Target size={14} color="#fcd34d" />
                 </div>
                 <div className={styles.activityText}>
                    <span className={styles.activityTitle}>Complete Tasks</span>
                    <span className={styles.activitySub}>Earn more</span>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </BannerWrapper>
  );
};

export default BonusVEsBanner;
