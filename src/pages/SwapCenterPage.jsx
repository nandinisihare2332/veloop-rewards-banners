import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, RefreshCw, ArrowRight } from 'lucide-react';
import toast from 'react-hot-toast';
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
    <div className="app-container page-transition" style={{ alignItems: 'flex-start' }}>
      <button 
        onClick={() => navigate('/')}
        style={{ background: 'transparent', border: 'none', color: '#cbd5e1', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', padding: '10px 0', fontSize: '1rem', marginBottom: '20px' }}
      >
        <ArrowLeft size={20} /> Back to Rewards
      </button>

      <div style={{ background: 'rgba(30, 41, 59, 0.5)', width: '100%', padding: '40px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', minHeight: '60vh' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
          <div style={{ background: 'rgba(56, 189, 248, 0.1)', padding: '15px', borderRadius: '50%', color: '#38bdf8' }}>
            <RefreshCw size={32} />
          </div>
          <h1 style={{ textAlign: 'left', marginBottom: 0 }}>Swap Center</h1>
        </div>
        
        <div style={{ display: 'flex', gap: '20px', marginBottom: '40px' }}>
           <div style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '15px 25px', borderRadius: '12px', flex: 1, border: '1px solid #fbbf24' }}>
              <div style={{ color: '#94a3b8', fontSize: '0.9rem' }}>VE Balance</div>
              <div style={{ color: '#fbbf24', fontSize: '1.8rem', fontWeight: 'bold' }}>{veBalance.toLocaleString()}</div>
           </div>
           <div style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '15px 25px', borderRadius: '12px', flex: 1, border: '1px solid #60a5fa' }}>
              <div style={{ color: '#94a3b8', fontSize: '0.9rem' }}>SVE Balance</div>
              <div style={{ color: '#60a5fa', fontSize: '1.8rem', fontWeight: 'bold' }}>{sveBalance.toLocaleString()}</div>
           </div>
        </div>

        <form onSubmit={handleSwap} style={{ background: 'rgba(15, 23, 42, 0.8)', padding: '40px', borderRadius: '16px', maxWidth: '600px', margin: '0 auto', border: '1px solid rgba(56, 189, 248, 0.2)' }}>
          <h3 style={{ color: '#f8fafc', marginBottom: '20px', textAlign: 'center' }}>Swap VE to SVE</h3>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '30px' }}>
             <div style={{ flex: 1, background: '#0f172a', padding: '20px', borderRadius: '12px', border: '1px solid #334155', textAlign: 'center' }}>
                <span style={{ color: '#fbbf24', fontWeight: 'bold', fontSize: '1.2rem', display: 'block', marginBottom: '5px' }}>VE</span>
                <span style={{ color: '#94a3b8', fontSize: '0.8rem' }}>1 VE = 1 SVE</span>
             </div>
             <ArrowRight size={24} color="#64748b" />
             <div style={{ flex: 1, background: '#0f172a', padding: '20px', borderRadius: '12px', border: '1px solid #334155', textAlign: 'center' }}>
                <span style={{ color: '#60a5fa', fontWeight: 'bold', fontSize: '1.2rem', display: 'block', marginBottom: '5px' }}>SVE</span>
                <span style={{ color: '#94a3b8', fontSize: '0.8rem' }}>No fee</span>
             </div>
          </div>

          <div style={{ marginBottom: '20px' }}>
             <label style={{ display: 'block', color: '#cbd5e1', marginBottom: '8px' }}>Amount to Swap (VE)</label>
             <input 
               type="number" 
               value={swapAmount}
               onChange={(e) => setSwapAmount(e.target.value)}
               placeholder="Enter amount"
               min="1"
               max={veBalance}
               style={{ width: '100%', padding: '15px', borderRadius: '8px', border: '1px solid #334155', background: '#0f172a', color: 'white', fontSize: '1.1rem' }}
             />
             <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '8px' }}>
                <button type="button" onClick={() => setSwapAmount(veBalance)} style={{ background: 'transparent', border: 'none', color: '#38bdf8', cursor: 'pointer', fontSize: '0.8rem' }}>
                   Max: {veBalance}
                </button>
             </div>
          </div>
          
          <button 
             type="submit" 
             disabled={isSwapping || !swapAmount || swapAmount > veBalance}
             style={{
                width: '100%', padding: '15px', borderRadius: '8px', background: isSwapping ? '#475569' : '#3b82f6', color: 'white', border: 'none', fontSize: '1.1rem', fontWeight: 'bold', cursor: isSwapping || !swapAmount || swapAmount > veBalance ? 'not-allowed' : 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px'
             }}
          >
             {isSwapping ? <RefreshCw size={20} style={{ animation: 'spin 1s linear infinite' }} /> : 'Confirm Swap'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SwapCenterPage;
