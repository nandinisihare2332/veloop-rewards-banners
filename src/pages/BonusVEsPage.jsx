import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Sparkles, Check, Gift } from 'lucide-react';
import toast from 'react-hot-toast';
import styles from './BonusVEsPage.module.css';
import '../App.css';

const BonusVEsPage = () => {
  const navigate = useNavigate();
  const [totalVe, setTotalVe] = useState(1500);
  const [bonuses, setBonuses] = useState([
    { id: 1, title: 'Daily Login', desc: 'Login for 7 consecutive days', reward: 50, claimed: false },
    { id: 2, title: 'First Exchange', desc: 'Complete your first Gem to VE exchange', reward: 100, claimed: false },
    { id: 3, title: 'Social Sharer', desc: 'Share your referral link on Twitter', reward: 30, claimed: false },
    { id: 4, title: 'Task Master', desc: 'Complete 50 Captcha tasks', reward: 200, claimed: true },
    { id: 5, title: 'Early Bird', desc: 'Complete tasks before 9 AM', reward: 40, claimed: false },
    { id: 6, title: 'Super Saver', desc: 'Hold 1,000 VEs for 30 days', reward: 300, claimed: false }
  ]);

  const handleClaim = (id, reward) => {
    setBonuses(bonuses.map(b => b.id === id ? { ...b, claimed: true } : b));
    setTotalVe(prev => prev + reward);
    toast.success('Bonus claimed! +' + reward + ' VEs', { icon: '🎁' });
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
           <div className={styles.headerLeft}>
             <div className={styles.headerIconWrap}>
               <Sparkles size={32} className={styles.headerIcon} />
             </div>
             <div>
               <h1 className={styles.pageTitle}>Bonus VEs</h1>
               <p className={styles.pageSubtitle}>Complete special activities to earn extra VEs</p>
             </div>
           </div>
           
           <div className={styles.totalBadge}>
              <span className={styles.totalLabel}>Total Earned</span>
              <span className={styles.totalValue}>{totalVe.toLocaleString()} VE</span>
           </div>
        </div>
        
        <div className={styles.grid}>
           {bonuses.map(bonus => (
              <div key={bonus.id} className={bonus.claimed ? styles.cardClaimed : styles.card}>
                 <div className={styles.cardHeader}>
                    <div className={bonus.claimed ? styles.cardIconWrapClaimed : styles.cardIconWrap}>
                       <Gift size={24} />
                    </div>
                    <span className={bonus.claimed ? styles.rewardTextClaimed : styles.rewardText}>
                       +{bonus.reward} VE
                    </span>
                 </div>
                 
                 <div className={styles.cardBody}>
                   <h3 className={bonus.claimed ? styles.cardTitleClaimed : styles.cardTitle}>
                     {bonus.title}
                   </h3>
                   <p className={styles.cardDesc}>{bonus.desc}</p>
                 </div>
                 
                 <button 
                    onClick={() => handleClaim(bonus.id, bonus.reward)}
                    disabled={bonus.claimed}
                    className={bonus.claimed ? styles.claimBtnDisabled : styles.claimBtn}
                 >
                    {bonus.claimed ? <><Check size={18} /> Claimed</> : 'Claim Bonus'}
                 </button>
              </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default BonusVEsPage;