import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Wallet, ArrowRight, Diamond } from 'lucide-react';
import toast from 'react-hot-toast';
import '../App.css';

const ExchangeCenterPage = () => {
  const navigate = useNavigate();
  const [gems, setGems] = useState(1250);
  const [ve, setVe] = useState(2500);
  const [exchangeAmount, setExchangeAmount] = useState('');
  const [isExchanging, setIsExchanging] = useState(false);
  const EXCH_RATE = 10; // 10 Gems = 1 VE

  const handleExchange = (e) => {
    e.preventDefault();
    const amount = Number(exchangeAmount);
    if (!amount || amount <= 0 || amount > gems || amount % EXCH_RATE !== 0) return;

    setIsExchanging(true);
    toast.loading('Processing exchange...', { id: 'exchange' });
    setTimeout(() => {
      setGems(prev => prev - amount);
      setVe(prev => prev + (amount / EXCH_RATE));
      setExchangeAmount('');
      setIsExchanging(false);
      toast.success(`Successfully exchanged ${amount} Gems for ${amount / EXCH_RATE} VEs!`, { id: 'exchange' });
    }, 1000);
  };

  const receivedVe = (Number(exchangeAmount) || 0) / EXCH_RATE;

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
          <div style={{ background: 'rgba(139, 92, 246, 0.1)', padding: '15px', borderRadius: '50%', color: '#8b5cf6' }}>
            <Wallet size={32} />
          </div>
          <h1 style={{ textAlign: 'left', marginBottom: 0 }}>Exchange Center</h1>
        </div>
        
        <div style={{ display: 'flex', gap: '20px', marginBottom: '40px' }}>
           <div style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '15px 25px', borderRadius: '12px', flex: 1, border: '1px solid #8b5cf6' }}>
              <div style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '5px' }}>My Gems</div>
              <div style={{ color: '#8b5cf6', fontSize: '1.8rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}>
                 {gems.toLocaleString()} <Diamond size={24} />
              </div>
           </div>
           <div style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '15px 25px', borderRadius: '12px', flex: 1, border: '1px solid #fbbf24' }}>
              <div style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '5px' }}>VE Balance</div>
              <div style={{ color: '#fbbf24', fontSize: '1.8rem', fontWeight: 'bold' }}>{ve.toLocaleString()}</div>
           </div>
        </div>

        <form onSubmit={handleExchange} style={{ background: 'rgba(15, 23, 42, 0.8)', padding: '40px', borderRadius: '16px', maxWidth: '600px', margin: '0 auto', border: '1px solid rgba(139, 92, 246, 0.2)' }}>
          <h3 style={{ color: '#f8fafc', marginBottom: '20px', textAlign: 'center' }}>Convert Gems to VE</h3>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '30px' }}>
             <div style={{ flex: 1, background: '#0f172a', padding: '20px', borderRadius: '12px', border: '1px solid #334155', textAlign: 'center' }}>
                <span style={{ color: '#8b5cf6', fontWeight: 'bold', fontSize: '1.2rem', display: 'block', marginBottom: '5px' }}>{EXCH_RATE} Gems</span>
             </div>
             <ArrowRight size={24} color="#64748b" />
             <div style={{ flex: 1, background: '#0f172a', padding: '20px', borderRadius: '12px', border: '1px solid #334155', textAlign: 'center' }}>
                <span style={{ color: '#fbbf24', fontWeight: 'bold', fontSize: '1.2rem', display: 'block', marginBottom: '5px' }}>1 VE</span>
             </div>
          </div>

          <div style={{ marginBottom: '30px' }}>
             <label style={{ display: 'block', color: '#cbd5e1', marginBottom: '8px' }}>Amount to Exchange (Gems)</label>
             <input 
               type="number" 
               value={exchangeAmount}
               onChange={(e) => setExchangeAmount(e.target.value)}
               placeholder="Must be multiple of 10"
               min="10"
               step="10"
               max={gems}
               style={{ width: '100%', padding: '15px', borderRadius: '8px', border: '1px solid #334155', background: '#0f172a', color: 'white', fontSize: '1.1rem' }}
             />
             <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px', fontSize: '0.9rem' }}>
                <span style={{ color: '#94a3b8' }}>You will receive: <span style={{ color: '#fbbf24', fontWeight: 'bold' }}>{Math.floor(receivedVe)} VE</span></span>
                <button type="button" onClick={() => setExchangeAmount(Math.floor(gems / EXCH_RATE) * EXCH_RATE)} style={{ background: 'transparent', border: 'none', color: '#8b5cf6', cursor: 'pointer' }}>
                   Max: {Math.floor(gems / EXCH_RATE) * EXCH_RATE}
                </button>
             </div>
          </div>
          
          <button 
             type="submit" 
             disabled={isExchanging || !exchangeAmount || exchangeAmount > gems || exchangeAmount % EXCH_RATE !== 0}
             style={{
                width: '100%', padding: '15px', borderRadius: '8px', background: (isExchanging || !exchangeAmount || exchangeAmount > gems || exchangeAmount % EXCH_RATE !== 0) ? '#475569' : '#8b5cf6', color: 'white', border: 'none', fontSize: '1.1rem', fontWeight: 'bold', cursor: (isExchanging || !exchangeAmount || exchangeAmount > gems || exchangeAmount % EXCH_RATE !== 0) ? 'not-allowed' : 'pointer'
             }}
          >
             {isExchanging ? 'Processing...' : 'Complete Exchange'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ExchangeCenterPage;
