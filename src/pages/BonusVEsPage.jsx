import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Sparkles, Check, Gift } from 'lucide-react';
import toast from 'react-hot-toast';
import '../App.css';

const BonusVEsPage = () => {
  const navigate = useNavigate();
  const [totalVe, setTotalVe] = useState(1500);
  const [bonuses, setBonuses] = useState([
    { id: 1, title: 'Daily Login', desc: 'Login for 7 consecutive days', reward: 50, claimed: false },
    { id: 2, title: 'First Exchange', desc: 'Complete your first Gem to VE exchange', reward: 100, claimed: false },
    { id: 3, title: 'Social Sharer', desc: 'Share your referral link on Twitter', reward: 30, claimed: false },
    { id: 4, title: 'Task Master', desc: 'Complete 50 Captcha tasks', reward: 200, claimed: true }
  ]);

  const handleClaim = (id, reward) => {
    setBonuses(bonuses.map(b => b.id === id ? { ...b, claimed: true } : b));
    setTotalVe(prev => prev + reward);
    toast.success(`Bonus claimed! +${reward} VEs`, { icon: '🎁' });
  };

  return (
    <div className="app-container page-transition" style={{ alignItems: 'flex-start', gap: '0px' }}>
      <button 
        onClick={() => navigate('/')}
        style={{ background: 'transparent', border: 'none', color: '#cbd5e1', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', padding: '10px 0', fontSize: '1rem', marginBottom: '20px' }}
      >
        <ArrowLeft size={20} /> Back to Rewards
      </button>

      <div style={{ background: 'rgba(30, 41, 59, 0.5)', width: '100%', padding: '40px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', minHeight: '60vh' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
           <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
             <div style={{ background: 'rgba(236, 72, 153, 0.1)', padding: '15px', borderRadius: '50%', color: '#ec4899' }}>
               <Sparkles size={32} />
             </div>
             <h1 style={{ textAlign: 'left', margin: 0 }}>Bonus VEs</h1>
           </div>
           <div style={{ background: 'rgba(236, 72, 153, 0.1)', padding: '10px 20px', borderRadius: '30px', border: '1px solid rgba(236, 72, 153, 0.3)' }}>
              <span style={{ color: '#ec4899', fontWeight: 'bold' }}>Total VEs: {totalVe.toLocaleString()}</span>
           </div>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
           {bonuses.map(bonus => (
              <div key={bonus.id} style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '24px', borderRadius: '12px', border: '1px solid #1e293b', display: 'flex', flexDirection: 'column' }}>
                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
                    <div style={{ background: 'rgba(251, 191, 36, 0.1)', padding: '10px', borderRadius: '8px', color: '#fbbf24' }}>
                       <Gift size={24} />
                    </div>
                    <span style={{ color: '#fbbf24', fontWeight: 'bold', fontSize: '1.2rem' }}>+{bonus.reward} VE</span>
                 </div>
                 <h3 style={{ color: '#f8fafc', marginBottom: '8px', marginTop: 0 }}>{bonus.title}</h3>
                 <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '20px', flex: 1 }}>{bonus.desc}</p>
                 
                 <button 
                    onClick={() => handleClaim(bonus.id, bonus.reward)}
                    disabled={bonus.claimed}
                    style={{ 
                       width: '100%', 
                       padding: '12px', 
                       borderRadius: '8px', 
                       background: bonus.claimed ? '#0f172a' : '#ec4899', 
                       color: bonus.claimed ? '#475569' : 'white', 
                       fontWeight: 'bold',
                       cursor: bonus.claimed ? 'not-allowed' : 'pointer',
                       display: 'flex',
                       justifyContent: 'center',
                       alignItems: 'center',
                       gap: '8px',
                       border: bonus.claimed ? '1px solid #1e293b' : 'none'
                    }}
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
