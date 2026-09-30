import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Users, Copy, Check, Send } from 'lucide-react';
import toast from 'react-hot-toast';
import '../App.css';

const ReferEarnPage = () => {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const [email, setEmail] = useState('');
  const [invites, setInvites] = useState([
    { id: 1, email: 'friend1@example.com', status: 'Completed', reward: 500 },
    { id: 2, email: 'friend2@example.com', status: 'Pending', reward: 0 }
  ]);

  const handleCopy = () => {
    navigator.clipboard.writeText('VELOOP123');
    setCopied(true);
    toast.success('Referral code copied!');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleInvite = (e) => {
    e.preventDefault();
    if (!email) return;
    setInvites([...invites, { id: Date.now(), email, status: 'Pending', reward: 0 }]);
    toast.success(`Invite sent to ${email}`);
    setEmail('');
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
            <Users size={32} />
          </div>
          <h1 style={{ textAlign: 'left', marginBottom: 0 }}>Refer & Earn</h1>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '30px' }}>
          <div style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '24px', borderRadius: '12px' }}>
            <h3 style={{ color: '#f8fafc', marginBottom: '15px' }}>Share Your Link</h3>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input type="text" readOnly value="https://veloop.com/r/VELOOP123" style={{ flex: 1, padding: '10px', borderRadius: '6px', border: '1px solid #334155', background: '#0f172a', color: '#94a3b8' }} />
              <button onClick={handleCopy} style={{ padding: '10px 15px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}>
                {copied ? <Check size={16} /> : <Copy size={16} />} {copied ? 'Copied' : 'Copy'}
              </button>
            </div>
            
            <h3 style={{ color: '#f8fafc', marginTop: '25px', marginBottom: '15px' }}>Invite via Email</h3>
            <form onSubmit={handleInvite} style={{ display: 'flex', gap: '10px' }}>
              <input type="email" placeholder="friend@example.com" value={email} onChange={(e) => setEmail(e.target.value)} style={{ flex: 1, padding: '10px', borderRadius: '6px', border: '1px solid #334155', background: '#0f172a', color: 'white' }} />
              <button type="submit" style={{ padding: '10px 15px', background: '#10b981', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Send size={16} /> Send
              </button>
            </form>
          </div>
          
          <div style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '24px', borderRadius: '12px' }}>
            <h3 style={{ color: '#f8fafc', marginBottom: '15px' }}>Total Rewards Earned</h3>
            <p style={{ color: '#fbbf24', fontSize: '2.5rem', fontWeight: 'bold' }}>
              {invites.reduce((acc, curr) => acc + curr.reward, 0)} VEs
            </p>
            <p style={{ color: '#94a3b8' }}>From {invites.filter(i => i.status === 'Completed').length} successful referrals</p>
          </div>
        </div>

        <div style={{ background: 'rgba(15, 23, 42, 0.4)', padding: '24px', borderRadius: '12px' }}>
           <h3 style={{ color: '#f8fafc', marginBottom: '15px' }}>Your Invites</h3>
           <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                 <tr style={{ borderBottom: '1px solid #334155', textAlign: 'left', color: '#94a3b8' }}>
                    <th style={{ padding: '12px 0' }}>Email</th>
                    <th style={{ padding: '12px 0' }}>Status</th>
                    <th style={{ padding: '12px 0' }}>Reward</th>
                 </tr>
              </thead>
              <tbody>
                 {invites.map((invite) => (
                    <tr key={invite.id} style={{ borderBottom: '1px solid #1e293b' }}>
                       <td style={{ padding: '15px 0', color: '#e2e8f0' }}>{invite.email}</td>
                       <td style={{ padding: '15px 0' }}>
                          <span style={{ 
                             padding: '4px 8px', 
                             borderRadius: '4px', 
                             fontSize: '0.8rem',
                             background: invite.status === 'Completed' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(245, 158, 11, 0.1)',
                             color: invite.status === 'Completed' ? '#10b981' : '#fbbf24'
                          }}>
                             {invite.status}
                          </span>
                       </td>
                       <td style={{ padding: '15px 0', color: '#fbbf24' }}>+{invite.reward} VEs</td>
                    </tr>
                 ))}
              </tbody>
           </table>
        </div>
      </div>
    </div>
  );
};

export default ReferEarnPage;
