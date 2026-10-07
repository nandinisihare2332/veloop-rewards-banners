import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, HelpCircle } from 'lucide-react';
import styles from './HowItWorksPage.module.css';
import '../App.css';

const HowItWorksPage = () => {
  const navigate = useNavigate();

  return (
    <div className="app-container page-transition" style={{ alignItems: 'flex-start', gap: '0px' }}>
      <button 
        onClick={() => navigate('/')}
        className={styles.backBtn}
      >
        <ArrowLeft size={20} /> Back to Rewards
      </button>

      <div className={styles.pageCard}>
        <div className={styles.header}>
          <div className={styles.headerIconWrap}>
            <HelpCircle size={32} className={styles.headerIcon} />
          </div>
          <h1 className={styles.pageTitle}>How Refer & Earn Works</h1>
        </div>

        <div className={styles.contentWrap}>
          <p className={styles.subtitle}>
            Inviting friends to VELOOP Rewards is simple, and you both get rewarded! Follow the steps below to start earning.
          </p>

          <div className={styles.stepsContainer}>
            <div className={styles.stepItem}>
              <div className={styles.stepNum}>1</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>Share your unique link</h3>
                <p className={styles.stepDesc}>Copy your referral link or code and share it with your friends via email, SMS, or social media.</p>
              </div>
            </div>

            <div className={styles.stepItem}>
              <div className={styles.stepNum}>2</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>Your friends join</h3>
                <p className={styles.stepDesc}>When your friends click the link, sign up for a new VELOOP account, and verify their email, the referral is registered.</p>
              </div>
            </div>

            <div className={styles.stepItem}>
              <div className={styles.stepNum}>3</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>You both earn VE!</h3>
                <p className={styles.stepDesc}>Once their account is fully set up, you both receive 50 VE directly into your balances!</p>
              </div>
            </div>
          </div>
          
          <button onClick={() => navigate('/refer-earn')} className={styles.ctaBtn}>
            Start Inviting Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksPage;
