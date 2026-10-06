import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, RefreshCw, ArrowRight, ArrowDownUp } from 'lucide-react';
import toast from 'react-hot-toast';
import styles from './SwapCenterPage.module.css';
import '../App.css';

const SwapCenterPage = () => {
  const navigate = useNavigate();
  const [veBalance, setVeBalance] = useState(2500);
  const [sveBalance, setSveBalance] = useState(100);
  const [swapAmount, setSwapAmount] = useState('');
  const [isSwapping, setIsSwapping] = useState(false);

  const handleSwap = (e) => {
    e.preventDefault();
    const amount = Number(swapAmount);
    if (!amount || amount <= 0 || amount > veBalance) return;

    setIsSwapping(true);
    toast.loading('Swapping VEs to SVEs...', { id: 'swap' });
    setTimeout(() => {
      setVeBalance(prev => prev - amount);
      setSveBalance(prev => prev + amount); // 1:1 conversion
      setSwapAmount('');
      setIsSwapping(false);
      toast.success(`Successfully swapped ${amount} VE!`, { id: 'swap' });
    }, 800);
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
            <RefreshCw size={32} className={styles.headerIcon} />
          </div>
          <h1 className={styles.pageTitle}>Swap Center</h1>
        </div>
        
        <div className={styles.balancesGrid}>
           <div className={styles.balanceCardVe}>
              <div className={styles.balanceLabel}>VE Balance</div>
              <div className={styles.balanceValue}>{veBalance.toLocaleString()}</div>
           </div>
           <div className={styles.balanceCardSve}>
              <div className={styles.balanceLabel}>SVE Balance</div>
              <div className={styles.balanceValueSve}>{sveBalance.toLocaleString()}</div>
           </div>
        </div>

        <form onSubmit={handleSwap} className={styles.swapForm}>
          <div className={styles.formHeader}>
             <ArrowDownUp size={24} className={styles.formIcon} />
             <h3>Swap VE to SVE</h3>
          </div>
          
          <div className={styles.exchangeRateBox}>
             <div className={styles.currencyBox}>
                <span className={styles.currencyName}>VE</span>
                <span className={styles.currencyRate}>1 VE = 1 SVE</span>
             </div>
             <div className={styles.exchangeArrow}>
                <ArrowRight size={24} color="#64748b" />
             </div>
             <div className={styles.currencyBoxSve}>
                <span className={styles.currencyNameSve}>SVE</span>
                <span className={styles.currencyRate}>No fee</span>
             </div>
          </div>

          <div className={styles.inputSection}>
             <div className={styles.inputHeader}>
                <label>Amount to Swap</label>
                <button type="button" onClick={() => setSwapAmount(veBalance)} className={styles.maxBtn}>
                   MAX: {veBalance}
                </button>
             </div>
             
             <div className={styles.inputWrapper}>
               <input 
                 type="number" 
                 value={swapAmount}
                 onChange={(e) => setSwapAmount(e.target.value)}
                 placeholder="0.00"
                 min="1"
                 max={veBalance}
                 className={styles.amountInput}
               />
               <div className={styles.inputSuffix}>VE</div>
             </div>
          </div>
          
          <button 
             type="submit" 
             disabled={isSwapping || !swapAmount || swapAmount > veBalance}
             className={isSwapping || !swapAmount || swapAmount > veBalance ? styles.submitBtnDisabled : styles.submitBtn}
          >
             {isSwapping ? <RefreshCw size={20} className={styles.spinIcon} /> : 'Confirm Swap'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SwapCenterPage;
