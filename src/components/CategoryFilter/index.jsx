import React from 'react';
import styles from './CategoryFilter.module.css';

const categories = [
  { id: 'all', label: 'All Banners (5)' },
  { id: 'refer', label: 'Refer & Earn' },
  { id: 'bonus', label: 'Bonus VEs' },
  { id: 'swap', label: 'Swap Center' },
  { id: 'captcha', label: 'Captcha Tasks' },
  { id: 'exchange', label: 'Exchange Center' },
];

const CategoryFilter = ({ activeCategory, onSelectCategory }) => {
  return (
    <div className={styles.filterWrapper}>
      <div className={styles.filterContainer}>
        {categories.map(cat => (
          <button
            key={cat.id}
            className={`${styles.filterBtn} ${activeCategory === cat.id ? styles.activeBtn : ''}`}
            onClick={() => onSelectCategory(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
