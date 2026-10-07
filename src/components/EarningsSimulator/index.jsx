import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ClipboardList, Shield, ArrowRight, Check, Gift } from 'lucide-react';
import toast from 'react-hot-toast';
import styles from './EarningsSimulator.module.css';

const defaultActivities = [
  {
    id: 'ads',
    title: 'Watch 5 Sponsor Video Ads',
    desc: 'Quick 3-min video stream',
    ves: 500,
    icon: '📺',
    checked: true,
  },
  {
    id: 'streak',
    title: 'Claim Daily Streak Bonus',
    desc: 'Consecutive check-in multiplier',
    ves: 250,
    icon: '🔥',
    checked: true,
  },
  {
    id: 'refer',
    title: 'Refer 1 Friend',
    desc: '+10% lifetime earning bonus',
    ves: 500,
    icon: '👥',
    checked: true,
  },
  {
    id: 'mining',
    title: '1-Hour Auto Cloud Mining',
    desc: 'Passive background credit',
    ves: 300,
    icon: '⛏️',
    checked: false,
  },
  {
    id: 'captcha',
    title: 'Solve 10 Captcha Tasks',
    desc: 'Instant gem verification rewards',
    ves: 250,
    icon: '🧩',
    checked: false,
  },
];

const EarningsSimulator = () => {
  const navigate = useNavigate();
  const [activities, setActivities] = useState(defaultActivities);

  const toggleActivity = (id) => {
    setActivities(prev =>
      prev.map(act => (act.id === id ? { ...act, checked: !act.checked } : act))
    );
  };

  const totalVEs = activities
    .filter(a => a.checked)
    .reduce((sum, a) => sum + a.ves, 0);

  // Conversion rate: 10 VEs = ₹1.00
  const estimatedRupees = (totalVEs / 10).toFixed(2);

  const handleClaim = () => {
    toast.success(`Simulated! ₹${estimatedRupees} credited to your sandbox wallet.`, {
      icon: '🎉',
    });
    navigate('/bonus-ves');
  };

  return (
    <section id="simulator" className={styles.simulatorWrapper}>
      <div className={styles.cardHeader}>
        <div className={styles.headerLeft}>
          <div className={styles.iconBadge}>
            <ClipboardList size={22} className={styles.clipIcon} />
          </div>
          <div>
            <h2 className={styles.simulatorTitle}>Earnings Simulator</h2>
            <p className={styles.simulatorSubtitle}>
              Select activities to estimate instant cashout
            </p>
          </div>
        </div>

        <div className={styles.sslBadge}>
          <Shield size={13} />
          <span>SSL 256-Bit</span>
        </div>
      </div>

      {/* Activity Checklist */}
      <div className={styles.activityList}>
        {activities.map(act => (
          <div
            key={act.id}
            className={`${styles.activityRow} ${act.checked ? styles.rowChecked : ''}`}
            onClick={() => toggleActivity(act.id)}
          >
            <div className={styles.checkboxWrap}>
              <div className={`${styles.customCheckbox} ${act.checked ? styles.boxActive : ''}`}>
                {act.checked && <Check size={12} strokeWidth={3} />}
              </div>
            </div>

            <div className={styles.activityContent}>
              <div className={styles.actTitle}>
                <span className={styles.emojiIcon}>{act.icon}</span>
                <span>{act.title}</span>
              </div>
              <div className={styles.actDesc}>{act.desc}</div>
            </div>

            <div className={styles.vesRewardBadge}>
              +{act.ves} VEs
            </div>
          </div>
        ))}
      </div>

      {/* Estimated Cashout Summary Box matching reference */}
      <div className={styles.cashoutBox}>
        <div className={styles.cashoutTop}>
          <span className={styles.cashoutLabel}>ESTIMATED INSTANT CASHOUT</span>
        </div>

        <div className={styles.cashoutAmountRow}>
          <div className={styles.amountWrap}>
            <span className={styles.rupeeSign}>₹</span>
            <span className={styles.rupeeVal}>{estimatedRupees}</span>
          </div>

          <div className={styles.cashoutPills}>
            <span className={styles.vePill}>{totalVEs.toLocaleString()} VEs</span>
            <span className={styles.feePill}>0% FEE INSTANT</span>
          </div>
        </div>
      </div>

      {/* Primary Action Button */}
      <button className={styles.claimBtn} onClick={handleClaim}>
        <span>Claim ₹{estimatedRupees} & Start Earning Now</span>
        <ArrowRight size={18} className={styles.claimArrow} />
      </button>

      {/* Live Social Proof Notification */}
      <div className={styles.notificationToast}>
        <div className={styles.toastIcon}>
          <Gift size={16} color="#ffffff" />
        </div>
        <div className={styles.toastText}>
          <strong>Referral Bonus!</strong> Ananya joined using your link (+200 VEs)
        </div>
        <div className={styles.toastTime}>Just now</div>
      </div>
    </section>
  );
};

export default EarningsSimulator;
