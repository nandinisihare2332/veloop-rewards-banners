import React from 'react';
import { useNavigate } from 'react-router-dom';
import BannerWrapper from '../BannerWrapper';
import styles from './BonusVEsBanner.module.css';
import { ArrowRight, Sparkles, Calendar, Users, Target } from 'lucide-react';

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
            <span>EXPLORE BONUSES</span>
            <ArrowRight size={16} />
          </button>
        </div>
        
        <div className={styles.visualArea}>
          <div className={styles.activitiesList}>
            <div className={styles.activityItem}>
              <div className={styles.activityIconWrap}><Calendar size={16} /></div>
              <div>
                <div className={styles.activityTitle}>Daily Check-in</div>
                <div className={styles.activityDesc}>Stay active</div>
              </div>
            </div>
            <div className={styles.activityItem}>
              <div className={styles.activityIconWrap}><Users size={16} /></div>
              <div>
                <div className={styles.activityTitle}>Invite Friends</div>
                <div className={styles.activityDesc}>Grow together</div>
              </div>
            </div>
            <div className={styles.activityItem}>
              <div className={styles.activityIconWrap}><Target size={16} /></div>
              <div>
                <div className={styles.activityTitle}>Complete Tasks</div>
                <div className={styles.activityDesc}>Earn more</div>
              </div>
            </div>
          </div>
          
          <div className={styles.coinsDisplay}>
             <div className={styles.coinCircleMain}>
                <div className={styles.coinOuter}>
                   <div className={styles.coinInner}>
                      <span className={styles.coinText}>VE</span>
                   </div>
                </div>
                <div className={styles.coinOuter2}>
                   <div className={styles.coinInner}>
                      <span className={styles.coinText}>VE</span>
                   </div>
                </div>
                <div className={styles.coinOuter3}>
                   <div className={styles.coinInner}>
                      <span className={styles.coinText}>VE</span>
                   </div>
                </div>
             </div>
             
             <div className={styles.floatingBonus}>
                <span>BONU</span><span className={styles.highlightVe}>VE</span>
             </div>
          </div>
        </div>
      </div>
    </BannerWrapper>
  );
};

export default BonusVEsBanner;
