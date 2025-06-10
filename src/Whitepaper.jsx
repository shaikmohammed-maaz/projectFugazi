import React from "react";
import styles from "./Whitepaper.module.css";
import Footer from "./Footer";

const Whitepaper = () => {
  return (
    <div className={styles.whitepaperPage}>
      <div className={styles.headerSection}>
        <h1 className={styles.title}>NexCoin Whitepaper</h1>
        <button className={styles.downloadBtn}>Download PDF</button>
      </div>
      <div className={styles.contentSection}>
        <div className={styles.keyPointsCard}>
          <h2>Key Points</h2>
          <ul>
            <li>Introduction to NexCoin and its vision</li>
            <li>Technology and security features explained</li>
            <li>Details on sustainability initiatives</li>
            <li>Economic model and use cases</li>
          </ul>
        </div>
        <div className={styles.illustration}>
          {/* SVG illustration placeholder */}
          <svg width="180" height="160" viewBox="0 0 180 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="30" width="120" height="100" rx="8" fill="#fff"/>
            <rect x="35" y="45" width="25" height="20" rx="2" fill="#1A3977"/>
            <rect x="65" y="45" width="60" height="6" rx="2" fill="#E9F0FF"/>
            <rect x="35" y="70" width="90" height="6" rx="2" fill="#E9F0FF"/>
            <rect x="35" y="82" width="90" height="6" rx="2" fill="#E9F0FF"/>
            <rect x="35" y="94" width="60" height="6" rx="2" fill="#E9F0FF"/>
            <circle cx="140" cy="60" r="7" fill="#FFD12A"/>
            <circle cx="160" cy="120" r="7" fill="#FFD12A"/>
            <circle cx="120" cy="130" r="7" fill="#FFD12A"/>
            <circle cx="80" cy="120" r="7" fill="#FFD12A"/>
            <line x1="140" y1="60" x2="160" y2="120" stroke="#FFD12A" strokeWidth="3"/>
            <line x1="140" y1="60" x2="120" y2="130" stroke="#FFD12A" strokeWidth="3"/>
            <line x1="120" y1="130" x2="80" y2="120" stroke="#FFD12A" strokeWidth="3"/>
          </svg>
        </div>
      </div>
    <Footer/>
    
    </div>
  );
};

export default Whitepaper;
