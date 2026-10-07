import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Wallet, ArrowRight } from 'lucide-react';
import toast from 'react-hot-toast';
import styles from './ExchangeCenterPage.module.css';
import '../App.css';

const ExchangeCenterPage = () => {
  const navigate = useNavigate();
  const [gems, setGems] = useState(1250);
  const [veBalance, setVeBalance] = useState(2500);
  const [exchangeAmount, setExchangeAmount] = useState('');
  
  const veToReceive = Math.floor(Number(exchangeAmount) / 10) || 0;

  const handleExchange = (e) => {
    e.preventDefault();
    const amount = Number(exchangeAmount);
    
    if (amount <= 0 || amount % 10 !== 0) {
      toast.error('Amount must be a multiple of 10');
      return;
    }
    
    if (amount > gems) {
      toast.error('Not enough Gems');
      return;
    }

    setGems(prev => prev - amount);
    setVeBalance(prev => prev + veToReceive);
    setExchangeAmount('');
    toast.success(`Successfully converted ${amount} Gems to ${veToReceive} VE!`, { icon: '💎' });
  };

  const handleMax = () => {
    setExchangeAmount(Math.floor(gems / 10) * 10);
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
             <Wallet size={32} className={styles.headerIcon} />
           </div>
           <h1 className={styles.pageTitle}>Exchange Center</h1>
        </div>

        <div className={styles.balancesGrid}>
           <div className={styles.balanceCardGem}>
              <div className={styles.balanceLabel}>My Gems</div>
              <div className={styles.balanceValueWrap}>
                <span className={styles.gemValue}>{gems.toLocaleString()}</span>
                <span className={styles.gemIcon}>💎</span>
              </div>
           </div>
           <div className={styles.balanceCardVe}>
              <div className={styles.balanceLabel}>VE Balance</div>
              <div className={styles.veValue}>{veBalance.toLocaleString()}</div>
           </div>
        </div>

        <div className={styles.convertCard}>
           <h3 className={styles.convertTitle}>Convert Gems to VE</h3>
           
           <div className={styles.rateBox}>
              <div className={styles.rateCardGem}>
                 10 Gems
              </div>
              <ArrowRight size={20} color="#64748b" />
              <div className={styles.rateCardVe}>
                 1 VE
              </div>
           </div>

           <form onSubmit={handleExchange} className={styles.exchangeForm}>
              <div className={styles.inputGroup}>
                 <label className={styles.inputLabel}>Amount to Exchange (Gems)</label>
                 <div className={styles.inputWrapper}>
                   <input 
                     type="number"
                     value={exchangeAmount}
                     onChange={(e) => setExchangeAmount(e.target.value)}
                     placeholder="Must be multiple of 10"
                     min="10"
                     step="10"
                     max={gems}
                     className={styles.amountInput}
                   />
                 </div>
                 
                 <div className={styles.inputFooter}>
                    <div className={styles.receiveText}>
                       You will receive: <span className={styles.receiveValue}>{veToReceive} VE</span>
                    </div>
                    <button type="button" onClick={handleMax} className={styles.maxBtn}>
                       Max: {gems}
                    </button>
                 </div>
              </div>

              <button 
                type="submit" 
                disabled={!exchangeAmount || exchangeAmount % 10 !== 0 || exchangeAmount > gems}
                className={(!exchangeAmount || exchangeAmount % 10 !== 0 || exchangeAmount > gems) ? styles.submitBtnDisabled : styles.submitBtn}
              >
                Complete Exchange
              </button>
           </form>
        </div>
      </div>
    </div>
  );
};

export default ExchangeCenterPage;