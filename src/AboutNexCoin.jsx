import styles from './AboutNexCoin.module.css';
import Footer from './Footer';

export default function AboutNexCoin() {
  return (
    <div className={styles.root}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>About NexCoin</h1>
          <div className={styles.heroSubtitle}>
            Empowering the Future with <br />
            <span className={styles.gradientText}>Secure, Mobile-First Cryptocurrency</span>
          </div>
        </div>
        <div className={styles.heroGraphic}>
          {/* Animated network graphic */}
          <svg width="180" height="140" viewBox="0 0 180 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.networkSvg}>
            <circle cx="90" cy="70" r="18" fill="#ffd43b"/>
            <circle cx="30" cy="30" r="8" fill="#ffd43b"/>
            <circle cx="150" cy="30" r="8" fill="#ffd43b"/>
            <circle cx="30" cy="110" r="8" fill="#ffd43b"/>
            <circle cx="150" cy="110" r="8" fill="#ffd43b"/>
            <line x1="90" y1="70" x2="30" y2="30" stroke="#ffd43b" strokeWidth="2"/>
            <line x1="90" y1="70" x2="150" y2="30" stroke="#ffd43b" strokeWidth="2"/>
            <line x1="90" y1="70" x2="30" y2="110" stroke="#ffd43b" strokeWidth="2"/>
            <line x1="90" y1="70" x2="150" y2="110" stroke="#ffd43b" strokeWidth="2"/>
            <line x1="30" y1="30" x2="150" y2="30" stroke="#ffd43b33" strokeWidth="2"/>
            <line x1="30" y1="110" x2="150" y2="110" stroke="#ffd43b33" strokeWidth="2"/>
          </svg>
        </div>
      </section>

      {/* About Us Section */}
      <section className={styles.aboutSection}>
        <div className={styles.aboutContent}>
          <h2>About Us</h2>
          <p>
            <b>NexCoin</b> is a next-generation digital currency focused on <b>security</b>, <b>sustainability</b>, and <b>innovation</b>. Our mobile-first approach empowers individuals and businesses to manage assets with confidence, transparency, and ease. We champion eco-friendly blockchain technology and are committed to a greener, more inclusive financial future.
          </p>
          <p>
            <b>Why NexCoin?</b> <br />
            <ul className={styles.bulletList}>
              <li>Lightning-fast, low-fee transactions</li>
              <li>Immutable, transparent blockchain</li>
              <li>Eco-conscious, energy-efficient protocol</li>
              <li>Seamless mobile experience</li>
              <li>Community-driven development</li>
            </ul>
          </p>
        </div>
        <div className={styles.aboutGraphic}>
          {/* Animated cubes graphic */}
          <div className={styles.cubeGrid}>
            {[...Array(9)].map((_, i) => (
              <div key={i} className={styles.cube}></div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className={styles.missionSection}>
        <div className={styles.missionCard}>
          <span className={styles.missionIcon}>
            <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><path d="M16 2l3 8h8l-6.5 5 2.5 8-7-5-7 5 2.5-8L5 10h8l3-8z" fill="#ffd43b"/></svg>
          </span>
          <div>
            <h3>Mission</h3>
            <p>To provide a secure, user-friendly, and eco-conscious cryptocurrency that empowers individuals and businesses globally.</p>
          </div>
        </div>
        <div className={styles.visionCard}>
          <span className={styles.visionIcon}>
            <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="14" stroke="#ffd43b" strokeWidth="4" fill="none"/><circle cx="16" cy="16" r="6" fill="#ffd43b"/></svg>
          </span>
          <div>
            <h3>Vision</h3>
            <p>To lead the adoption of cryptocurrency by combining security, sustainability, and accessibility for all.</p>
          </div>
        </div>
        <button className={styles.whitepaperBtn}>Read Whitepaper</button>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
