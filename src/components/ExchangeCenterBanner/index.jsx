import React from 'react';
import { useNavigate } from 'react-router-dom';
import BannerWrapper from '../BannerWrapper';
import styles from './ExchangeCenterBanner.module.css';
import { ArrowRight, Wallet, ArrowRightLeft, Diamond } from 'lucide-react';

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
            Convert <span className={styles.gemText}>Gems</span> to <span className={styles.veText}>VEs</span>
          </h2>
          <p className={styles.description}>
            Exchange eligible Gems into VEs and grow your VE balance. Explore available redemption options.
          </p>
          <button className={styles.cta} onClick={() => navigate('/exchange-center')}>
            OPEN EXCHANGE CENTER <ArrowRight size={18} className={styles.ctaIcon} />
          </button>
        </div>
        
        <div className={styles.visualArea}>
          <div className={styles.glowBackground}></div>
          
          <div className={styles.conversionProcess}>
            <div className={`${styles.itemCard} ${styles.gemCard}`}>
              <span className={styles.cardHeader}>GEM</span>
              <div className={styles.iconWrapper}>
                 <Diamond size={48} fill="#c084fc" color="#e9d5ff" className={styles.gemIcon} />
              </div>
            </div>
            
            <div className={styles.arrowSection}>
              <div className={styles.pulseCircle}>
                 <ArrowRightLeft size={20} className={styles.exchangeIcon} />
              </div>
              <div className={styles.exchangeRate}>
                 <span className={styles.rateValue}>100</span> <Diamond size={10} fill="#c084fc" color="#e9d5ff"/> 
                 <ArrowRight size={10} className={styles.miniArrow}/> 
                 <span className={styles.rateValue}>10</span> <span style={{color: '#fcd34d', fontWeight: 'bold', fontSize: '0.6rem'}}>VE</span>
              </div>
            </div>
            
            <div className={`${styles.itemCard} ${styles.veCard}`}>
              <span className={styles.cardHeader}>VE</span>
              <div className={styles.veCoinWrapper}>
                 <div className={styles.veCoin}>VE</div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </BannerWrapper>
  );
};

export default ExchangeCenterBanner;
