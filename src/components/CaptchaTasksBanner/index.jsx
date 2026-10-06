import React from 'react';
import { useNavigate } from 'react-router-dom';
import BannerWrapper from '../BannerWrapper';
import styles from './CaptchaTasksBanner.module.css';
import { ArrowRight, CheckCircle, ShieldCheck } from 'lucide-react';

const CaptchaTasksBanner = () => {
  const navigate = useNavigate();
  return (
    <BannerWrapper className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <ShieldCheck size={14} className={styles.badgeIcon} />
            <span>VERIFICATION TASKS</span>
          </div>
          <h2 className={styles.heading}>
            Solve Captchas.<br/>
            <span className={styles.headingHighlight}>Earn Gems.</span>
          </h2>
          <p className={styles.description}>
            Complete simple captcha tasks accurately and earn eligible Gem rewards.
          </p>
          <button className={styles.cta} onClick={() => navigate('/captcha-tasks')}>
            <span>START TASK</span>
            <ArrowRight size={16} />
          </button>
        </div>
        
        <div className={styles.visualArea}>
          <div className={styles.laptop}>
            <div className={styles.screen}>
               <div className={styles.captchaBox}>
                 <span className={styles.captchaText}>K 7 M 4</span>
                 <div className={styles.stripeOverlay}></div>
               </div>
               <div className={styles.inputArea}>
                 <div className={styles.inputField}>K7M4 <span className={styles.cursor}>|</span></div>
                 <div className={styles.submitBtn}><CheckCircle size={16} /></div>
               </div>
            </div>
            <div className={styles.base}></div>
          </div>
          <div className={styles.floatGem1}></div>
          <div className={styles.floatGem2}></div>
          <div className={styles.floatGem3}></div>
          <div className={styles.successIcon}>
             <CheckCircle size={32} />
          </div>
        </div>
      </div>
    </BannerWrapper>
  );
};

export default CaptchaTasksBanner;
