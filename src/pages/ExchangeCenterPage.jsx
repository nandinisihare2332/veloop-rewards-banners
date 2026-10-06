import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Store, Coins, Check, CreditCard } from 'lucide-react';
import toast from 'react-hot-toast';
import styles from './ExchangeCenterPage.module.css';
import '../App.css';

const ExchangeCenterPage = () => {
  const navigate = useNavigate();
  const [sveBalance, setSveBalance] = useState(1500);
  
  const exchangeItems = [
    { id: 1, name: '$5 PayPal', cost: 500, type: 'cash', icon: '💸' },
    { id: 2, name: '$10 Amazon Card', cost: 1000, type: 'giftcard', icon: '💳' },
    { id: 3, name: 'Premium Avatar', cost: 200, type: 'digital', icon: '😎' },
    { id: 4, name: '$20 Steam Wallet', cost: 1900, type: 'giftcard', icon: '🎮' },
    { id: 5, name: 'Profile Badge', cost: 150, type: 'digital', icon: '🌟' },
    { id: 6, name: '$50 Crypto Voucher', cost: 4800, type: 'crypto', icon: '💰' },
  ];

  const handleExchange = (item) => {
    if (sveBalance >= item.cost) {
      setSveBalance(prev => prev - item.cost);
      toast.success(`Successfully redeemed ${item.name}!`, { icon: '🎉' });
    } else {
      toast.error('Insufficient SVE balance!');
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
           <div className={styles.headerLeft}>
             <div className={styles.headerIconWrap}>
               <Store size={32} className={styles.headerIcon} />
             </div>
             <div>
               <h1 className={styles.pageTitle}>Exchange Center</h1>
               <p className={styles.pageSubtitle}>Redeem your SVE for real-world rewards</p>
             </div>
           </div>
           
           <div className={styles.balanceBadge}>
              <span className={styles.balanceLabel}>Available Balance</span>
              <div className={styles.balanceWrap}>
                <Coins size={24} className={styles.balanceIcon} />
                <span className={styles.balanceValue}>{sveBalance.toLocaleString()} SVE</span>
              </div>
           </div>
        </div>
        
        <div className={styles.grid}>
           {exchangeItems.map(item => {
             const canAfford = sveBalance >= item.cost;
             return (
              <div key={item.id} className={styles.itemCard}>
                 <div className={styles.itemIcon}>{item.icon}</div>
                 <h3 className={styles.itemName}>{item.name}</h3>
                 <div className={styles.itemCostWrap}>
                    <span className={styles.itemCost}>{item.cost}</span>
                    <span className={styles.itemCostSuffix}>SVE</span>
                 </div>
                 
                 <button 
                    onClick={() => handleExchange(item)}
                    disabled={!canAfford}
                    className={canAfford ? styles.exchangeBtn : styles.exchangeBtnDisabled}
                 >
                    {canAfford ? 'Redeem Now' : 'Not enough SVE'}
                 </button>
              </div>
             );
           })}
        </div>
      </div>
    </div>
  );
};

export default ExchangeCenterPage;