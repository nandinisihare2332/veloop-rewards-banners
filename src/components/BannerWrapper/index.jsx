import React from 'react';
import styles from './BannerWrapper.module.css';

const BannerWrapper = ({ children, backgroundStyle, className }) => {
  return (
    <div 
      className={`${styles.bannerWrapper} ${className || ''}`}
      style={backgroundStyle}
      role="region"
      aria-label="Promotional Banner"
      tabIndex={0}
    >
      {children}
    </div>
  );
};

export default BannerWrapper;
