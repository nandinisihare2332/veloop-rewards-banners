import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Zap, Menu, X, Coins, Gem, ArrowRight } from 'lucide-react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className={styles.navbarWrapper}>
      <div className={styles.navbarContainer}>
        {/* Logo and Brand Title */}
        <Link to="/" className={styles.brandLink} onClick={() => setMobileMenuOpen(false)}>
          <div className={styles.logoBadge}>
            <Zap size={20} className={styles.logoIcon} />
          </div>
          <div className={styles.brandTitles}>
            <div className={styles.brandMain}>
              <span className={styles.veloopText}>VELOOP</span>{' '}
              <span className={styles.rewardsText}>REWARDS</span>
            </div>
            <div className={styles.brandSub}>EARN & REDEEM</div>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className={styles.desktopNav}>
          <a href="#banners" className={styles.navLink}>Banners</a>
          <a href="#simulator" className={styles.navLink}>Simulator</a>
          <Link to="/refer-earn" className={styles.navLink}>Refer & Earn</Link>
          <Link to="/swap-center" className={styles.navLink}>Swap Center</Link>
          <Link to="/exchange-center" className={styles.navLink}>Exchange</Link>
        </nav>

        {/* Live Wallet Balances */}
        <div className={styles.walletBadges}>
          <div className={styles.veBadge} title="VE Balance">
            <Coins size={14} className={styles.veIcon} />
            <span>2,500 VEs</span>
          </div>
          <div className={styles.gemBadge} title="Gems Balance">
            <Gem size={14} className={styles.gemIcon} />
            <span>1,250 Gems</span>
          </div>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          className={styles.mobileMenuToggle}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className={styles.mobileDrawer}>
          <nav className={styles.mobileNavLinks}>
            <a href="#banners" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>
              Banners Gallery
            </a>
            <a href="#simulator" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>
              Earnings Simulator
            </a>
            <Link to="/refer-earn" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>
              Refer & Earn Page
            </Link>
            <Link to="/bonus-ves" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>
              Bonus VEs Page
            </Link>
            <Link to="/swap-center" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>
              Swap Center Page
            </Link>
            <Link to="/captcha-tasks" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>
              Captcha Tasks Page
            </Link>
            <Link to="/exchange-center" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>
              Exchange Center Page
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
