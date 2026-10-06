import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, Users, Copy, CheckCircle, Share2, Mail, ExternalLink } from 'lucide-react';
import toast from 'react-hot-toast';
import styles from './ReferEarnPage.module.css';
import '../App.css';

const ReferEarnPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [copied, setCopied] = useState(false);
  const [email, setEmail] = useState('');
  const [invites, setInvites] = useState([
    { id: 1, email: 'john@example.com', status: 'Completed', reward: 50 },
    { id: 2, email: 'sarah@example.com', status: 'Pending', reward: 0 },
  ]);

    

  const referralLink = "https://veloop.app/ref/VELOOP2024";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    toast.success('Referral link copied!');
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
            <Users size={32} className={styles.headerIcon} />
          </div>
          <h1 className={styles.pageTitle}>Refer & Earn</h1>
        </div>

        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div>
              <div className={styles.statLabel}>Total Invites</div>
              <div className={styles.statValue}>{invites.length}</div>
              <p className={styles.statDesc}>Friends joined</p>
            </div>
            <Users size={48} className={styles.statIconWrap} />
          </div>
          <div className={styles.statCardSecondary}>
            <div>
              <div className={styles.statLabel}>Total Earned</div>
              <div className={styles.statValueSecondary}>
                 150 <span className={styles.veText}>VE</span>
              </div>
              <p className={styles.statDesc}>From referrals</p>
            </div>
            <Share2 size={48} className={styles.statIconWrapSecondary} />
          </div>
        </div>

        <div className={styles.actionGrid}>
          <div className={styles.actionCard}>
             <h3 className={styles.actionTitle}>Share your referral link</h3>
             <p className={styles.actionDesc}>Copy your unique link and share it with friends.</p>
             <div className={styles.inputGroup}>
                <input 
                  type="text" 
                  value={referralLink} 
                  readOnly 
                  className={styles.inputBox}
                />
                <button onClick={handleCopy} className={styles.primaryBtn}>
                  {copied ? <CheckCircle size={20} /> : <Copy size={20} />}
                  {copied ? 'Copied' : 'Copy'}
                </button>
             </div>
             
             <h3 className={styles.actionTitle} style={{marginTop: '30px'}}>Invite via Email</h3>
             <form onSubmit={handleInvite} className={styles.inputGroup}>
                <input 
                  type="email" 
                  placeholder="friend@email.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={styles.inputBox}
                />
                <button type="submit" className={styles.secondaryBtn}>
                  <Mail size={20} /> Invite
                </button>
             </form>
          </div>
          
          <div id="how-it-works" className={styles.howItWorksCard}>
             <h3 className={styles.actionTitle}>How it works</h3>
             <div style={{ marginTop: '20px' }}>
                <div className={styles.stepItem}>
                   <div className={styles.stepNum}>1</div>
                   <div>
                     <div className={styles.stepTitle}>Share Link</div>
                     <div className={styles.stepDesc}>Send your link to friends</div>
                   </div>
                </div>
                <div className={styles.stepItem}>
                   <div className={styles.stepNum}>2</div>
                   <div>
                     <div className={styles.stepTitle}>Friends Join</div>
                     <div className={styles.stepDesc}>They sign up & verify</div>
                   </div>
                </div>
                <div className={styles.stepItem}>
                   <div className={styles.stepNum}>3</div>
                   <div>
                     <div className={styles.stepTitle}>Earn VE</div>
                     <div className={styles.stepDesc}>You both get 50 VE</div>
                   </div>
                </div>
             </div>
          </div>
        </div>

        <div className={styles.tableCard}>
          <div className={styles.tableHeaderWrap}>
            <h3 className={styles.actionTitle} style={{marginBottom: 0}}>Recent Invites</h3>
            <ExternalLink size={20} color="#64748b" />
          </div>
          <div className={styles.tableResponsive}>
            <table className={styles.customTable}>
              <thead>
                <tr>
                  <th>User Email</th>
                  <th>Status</th>
                  <th>Reward</th>
                </tr>
              </thead>
              <tbody>
                {invites.map((invite) => (
                  <tr key={invite.id}>
                    <td className={styles.tdEmail}>{invite.email}</td>
                    <td>
                      <span className={invite.status === 'Completed' ? styles.statusCompleted : styles.statusPending}>
                        {invite.status}
                      </span>
                    </td>
                    <td className={styles.tdReward}>+{invite.reward} VE</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferEarnPage;
