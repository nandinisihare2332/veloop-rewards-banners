import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, RefreshCw, Send, HelpCircle } from 'lucide-react';
import toast from 'react-hot-toast';
import styles from './CaptchaTasksPage.module.css';
import '../App.css';

const CaptchaTasksPage = () => {
  const navigate = useNavigate();
  const [captchaInput, setCaptchaInput] = useState('');
  const [completedToday, setCompletedToday] = useState(12);
  const totalDaily = 50;
  
  // Dummy captcha generation
  const [captchaText, setCaptchaText] = useState('X7B9K2');

  const generateNewCaptcha = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for ( let i = 0; i < 6; i++ ) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaText(result);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaInput) return;

    if (captchaInput.toUpperCase() === captchaText) {
        if (completedToday < totalDaily) {
        setCompletedToday(prev => prev + 1);
        toast.success('Correct! +5 Gems Earned! 💎', { icon: '💎' });
        setCaptchaInput('');
        generateNewCaptcha();
      } else {
        toast.error('Daily limit reached!');
      }
    } else {
      toast.error('Incorrect CAPTCHA. Try again.');
      setCaptchaInput('');
      generateNewCaptcha();
    }
  };

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
             <ShieldCheck size={32} className={styles.headerIcon} />
           </div>
           <div>
             <h1 className={styles.pageTitle}>Captcha Tasks</h1>
             <p className={styles.pageSubtitle}>Solve CAPTCHAs to earn Gems instantly</p>
           </div>
        </div>

        <div className={styles.statsCard}>
           <div className={styles.statBox}>
             <span className={styles.statLabel}>Daily Progress</span>
             <span className={styles.statValue}>{completedToday} / {totalDaily}</span>
           </div>
           <div className={styles.progressBarWrap}>
             <div 
               className={styles.progressBar} 
               style={{ width: `${(completedToday / totalDaily) * 100}%` }}
             ></div>
           </div>
           <p className={styles.statDesc}>Earn 5 Gems (💎) per successful solve. Redeemable for VEs in Exchange Center.</p>
        </div>

        <div className={styles.captchaContainer}>
           <div className={styles.captchaBox}>
             <div className={styles.captchaImageArea}>
                <div className={styles.captchaPattern}></div>
                <span className={styles.captchaTextDisplay} style={{ 
                  transform: `rotate(${Math.random() * 10 - 5}deg)`,
                  letterSpacing: '8px'
                }}>
                  {captchaText}
                </span>
             </div>
             
             <button 
                type="button" 
                onClick={generateNewCaptcha} 
                className={styles.refreshBtn}
                title="Get new CAPTCHA"
             >
                <RefreshCw size={20} />
             </button>
           </div>
           
           <form onSubmit={handleSubmit} className={styles.inputForm}>
              <div className={styles.inputWrapper}>
                <input 
                  type="text" 
                  value={captchaInput}
                  onChange={(e) => setCaptchaInput(e.target.value)}
                  placeholder="Enter the text above"
                  className={styles.inputField}
                  autoComplete="off"
                />
              </div>
              
              <button 
                type="submit" 
                disabled={!captchaInput || completedToday >= totalDaily}
                className={!captchaInput || completedToday >= totalDaily ? styles.submitBtnDisabled : styles.submitBtn}
              >
                <Send size={18} /> Submit
              </button>
           </form>
           
           {completedToday >= totalDaily && (
             <div className={styles.limitReachedBox}>
               <HelpCircle size={20} className={styles.limitIcon} />
               You've reached your daily limit for Captcha tasks. Come back tomorrow!
             </div>
           )}
        </div>
      </div>
    </div>
  );
};

export default CaptchaTasksPage;