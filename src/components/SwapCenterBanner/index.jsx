import React from 'react';
import { useNavigate } from 'react-router-dom';
import BannerWrapper from '../BannerWrapper';
import styles from './SwapCenterBanner.module.css';
import { ArrowRight, RefreshCw, CreditCard, ChevronRight } from 'lucide-react';

const SwapCenterBanner = () => {
  const navigate = useNavigate();
  return (
    <BannerWrapper className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <RefreshCw size={14} className={styles.badgeIcon} />
            <span>EXCHANGE</span>
          </div>
          <h2 className={styles.heading}>
            <span className={styles.headingHighlight}>Swap</span> Center
          </h2>
          <p className={styles.description}>
            Convert eligible reward balances between supported currencies and manage your rewards more efficiently.
          </p>
          <button className={styles.cta} onClick={() => navigate('/swap-center')}>
            OPEN SWAP CENTER <ArrowRight size={18} className={styles.ctaIcon} />
          </button>
        </div>
        
        <div className={styles.visualArea}>
          <div className={styles.backgroundWallet}>
             <div className={styles.walletHeader}>
                <CreditCard size={14} />
                <span>REWARD WALLET</span>
             </div>
             <div className={styles.walletLabel}>Eligible Balances</div>
             <div className={styles.walletTrack}>
                <div className={styles.walletFill} style={{width: '75%', background: '#fcd34d'}}></div>
             </div>
             <div className={styles.walletTrack}>
                <div className={styles.walletFill} style={{width: '40%', background: '#60a5fa'}}></div>
             </div>
          </div>

          <div className={styles.exchangeMechanism}>
            <div className={`${styles.card} ${styles.cardLeft}`}>
              <div className={styles.cardTop}>
                <span className={styles.cardCurrency}>VE</span>
                <div className={styles.coinGold}></div>
              </div>
              <span className={styles.cardSubtitle}>REWARD CURRENCY</span>
              <div className={styles.cardChip}></div>
            </div>
            
            <div className={styles.swapAction}>
              <div className={styles.pulseRing}></div>
              <div className={styles.swapIconContainer}>
                <RefreshCw size={24} className={styles.spinIcon} />
              </div>
            </div>
            
            <div className={`${styles.card} ${styles.cardRight}`}>
              <div className={styles.cardTop}>
                <span className={styles.cardCurrency}>SVE</span>
                <div className={styles.coinBlue}></div>
              </div>
              <span className={styles.cardSubtitle}>REWARD CURRENCY</span>
              <div className={styles.cardChip}></div>
            </div>
          </div>
          
          <div className={styles.flowLines}>
             <ChevronRight className={styles.flowArrow} size={24} />
             <ChevronRight className={styles.flowArrow} size={24} />
             <ChevronRight className={styles.flowArrow} size={24} />
          </div>
        </div>
      </div>
    </BannerWrapper>
  );
};

export default SwapCenterBanner;
