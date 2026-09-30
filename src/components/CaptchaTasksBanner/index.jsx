import React from 'react';
import { useNavigate } from 'react-router-dom';
import BannerWrapper from '../BannerWrapper';
import styles from './CaptchaTasksBanner.module.css';
import { ChevronRight, CheckCircle, Diamond, ShieldCheck } from 'lucide-react';

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
             START TASK <ChevronRight size={18} className={styles.ctaIcon} />
          </button>
        </div>
        
        <div className={styles.visualArea}>
           <div className={styles.glowEffect}></div>

           <div className={styles.laptopContainer}>
              <div className={styles.screen}>
                 <div className={styles.screenGlow}></div>
                 <div className={styles.captchaDisplay}>
                    K7M4
                    <div className={styles.captchaNoise}></div>
                 </div>
                 <div className={styles.inputArea}>
                    <div className={styles.inputField}>
                       K7M4<span className={styles.cursor}>|</span>
                    </div>
                    <div className={styles.submitBtn}>
                       <CheckCircle size={16} color="#fff" />
                    </div>
                 </div>
              </div>
              <div className={styles.keyboard}>
                 <div className={styles.keys}></div>
              </div>
           </div>

           <div className={styles.floatingElements}>
              <Diamond size={32} className={`${styles.gem} ${styles.gem1}`} fill="#c084fc" color="#e9d5ff" />
              <Diamond size={24} className={`${styles.gem} ${styles.gem2}`} fill="#a855f7" color="#d8b4fe" />
              <Diamond size={28} className={`${styles.gem} ${styles.gem3}`} fill="#9333ea" color="#c084fc" />
              
              <div className={styles.successBadge}>
                 <CheckCircle size={20} color="#10b981" />
              </div>
           </div>
        </div>
      </div>
    </BannerWrapper>
  );
};

export default CaptchaTasksBanner;
