import React from 'react';
import { useNavigate } from 'react-router-dom';
import BannerWrapper from '../BannerWrapper';
import styles from './SwapCenterBanner.module.css';
import { ArrowRight, RefreshCw, Layers } from 'lucide-react';

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
            Swap Center
          </h2>
          <p className={styles.description}>
            Convert eligible reward balances between supported currencies and manage your rewards more efficiently.
          </p>
          <button className={styles.cta} onClick={() => navigate('/swap-center')}>
            <span>OPEN SWAP CENTER</span>
            <ArrowRight size={16} />
          </button>
        </div>
        
        <div className={styles.visualArea}>
          <div className={styles.cardContainer}>
            <div className={styles.currencyCard}>
              <div className={styles.cardHeader}>
                <span className={styles.cardTitle}>VE</span>
                <div className={styles.dotOrange}></div>
              </div>
              <div className={styles.cardSubtitle}>REWARD CURRENCY</div>
              <div className={styles.cardBlock}></div>
            </div>
            
            <div className={styles.swapIconWrap}>
              <RefreshCw size={24} className={styles.swapIcon} />
            </div>
            
            <div className={styles.currencyCardBlue}>
              <div className={styles.cardHeader}>
                <span className={styles.cardTitle}>SVE</span>
                <div className={styles.dotBlue}></div>
              </div>
              <div className={styles.cardSubtitle}>REWARD CURRENCY</div>
              <div className={styles.cardBlock}></div>
            </div>
          </div>
          
          <div className={styles.floatingWallet}>
             <div className={styles.walletHeader}>
               <Layers size={12} /> REWARD WALLET
             </div>
             <div className={styles.walletDesc}>Eligible Balances</div>
             <div className={styles.progressTrack}><div className={styles.progressBar}></div></div>
             <div className={styles.progressTrack2}><div className={styles.progressBar2}></div></div>
          </div>
        </div>
      </div>
    </BannerWrapper>
  );
};

export default SwapCenterBanner;
