import React from 'react';
import { useNavigate } from 'react-router-dom';
import BannerWrapper from '../BannerWrapper';
import styles from './ExchangeCenterBanner.module.css';
import { ArrowRight, Wallet, ArrowLeftRight } from 'lucide-react';

const ExchangeCenterBanner = () => {
  const navigate = useNavigate();
  return (
    <BannerWrapper className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <Wallet size={14} className={styles.badgeIcon} />
            <span>REDEMPTION</span>
          </div>
          <h2 className={styles.heading}>
            Convert <span className={styles.headingHighlight1}>Gems</span> to <span className={styles.headingHighlight2}>VEs</span>
          </h2>
          <p className={styles.description}>
            Exchange eligible Gems into VEs and grow your VE balance. Explore available redemption options.
          </p>
          <button className={styles.cta} onClick={() => navigate('/exchange-center')}>
            <span>OPEN EXCHANGE CENTER</span>
            <ArrowRight size={16} />
          </button>
        </div>
        
        <div className={styles.visualArea}>
           <div className={styles.exchangeVisualization}>
             <div className={styles.cardGem}>
               <div className={styles.cardTitle}>GEM</div>
               <div className={styles.gemIcon}></div>
             </div>
             
             <div className={styles.exchangeProcess}>
               <div className={styles.exchangeIconWrap}>
                 <ArrowLeftRight size={20} />
               </div>
               <div className={styles.rateInfo}>100 💎 = 10 VE</div>
             </div>
             
             <div className={styles.cardVe}>
               <div className={styles.cardTitle}>VE</div>
               <div className={styles.veIcon}>VE</div>
             </div>
           </div>
        </div>
      </div>
    </BannerWrapper>
  );
};

export default ExchangeCenterBanner;
