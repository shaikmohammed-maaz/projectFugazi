import React from 'react';
import styles from './Download.module.css';
import Footer from './Footer';

const steps = [
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="8" width="32" height="32" rx="6" fill="#FFD600"/><rect x="16" y="36" width="16" height="4" rx="2" fill="#1A237E"/><rect x="20" y="12" width="8" height="16" rx="2" fill="#fff"/></svg>
    ),
    label: 'Download App',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="12" width="32" height="24" rx="6" fill="#FFD600"/><rect x="20" y="20" width="8" height="8" rx="2" fill="#fff"/></svg>
    ),
    label: '2. Create Wallet',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="8" width="32" height="32" rx="6" fill="#FFD600"/><path d="M24 16v16M24 16l6 6M24 16l-6 6" stroke="#1A237E" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    label: '3. Start Mining',
  },
];

const Download = () => (
  <div className={styles.downloadPage}>
    <div className={styles.headerSection}>
      <h1 className={styles.title}>Download NexCoin App</h1>
      <p className={styles.subtitle}>Available on iOS and Android</p>
      <div className={styles.downloadRow}>
        <div className={styles.downloadButtons}>
          <a className={styles.downloadBtn} href="#">Download for IOS</a>
          <a className={styles.downloadBtn} href="#">Download for Android</a>
        </div>
        <div className={styles.qrContainer}>
          <img src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://nexcoin.app" alt="QR Code" className={styles.qrImg} />
        </div>
      </div>
    </div>
    <div className={styles.stepsSection}>
      {steps.map((step, idx) => (
        <div className={styles.stepCard} key={idx}>
          <div className={styles.stepIcon}>{step.icon}</div>
          <div className={styles.stepLabel}>{step.label}</div>
        </div>
      ))}
    </div>
    <Footer />
  </div>
);

export default Download;
