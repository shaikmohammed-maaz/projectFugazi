import styles from './NexCoinLanding.module.css';
import Footer from './Footer';
import heroSectionImg from './assets/heroSection.png';

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#' },
  { label: 'FAQ', href: '#' },
  { label: 'Download', href: '#' },
  { label: 'Whitepaper', href: '#' },
  { label: 'Team', href: '#' },
];

const features = [
  {
    icon: (
      <span className={styles.featureIcon}>
        <svg width="28" height="28" fill="none" viewBox="0 0 28 28"><rect x="6" y="4" width="16" height="20" rx="3" stroke="#0a2a5c" strokeWidth="2" fill="#ffd43b"/><rect x="10" y="22" width="8" height="2" rx="1" fill="#0a2a5c"/></svg>
      </span>
    ),
    title: 'Mobile-Friendly',
    desc: 'Access and manage your cryptocurrency portfolio seamlessly on the go.',
  },
  {
    icon: (
      <span className={styles.featureIcon}>
        <svg width="28" height="28" fill="none" viewBox="0 0 28 28"><rect x="8" y="12" width="12" height="10" rx="2" stroke="#0a2a5c" strokeWidth="2" fill="#ffd43b"/><circle cx="14" cy="9" r="4" stroke="#0a2a5c" strokeWidth="2" fill="#ffd43b"/></svg>
      </span>
    ),
    title: 'Secure & Immutable',
    desc: 'Leveraging blockchain technology to ensure your assets protected.',
  },
  {
    icon: (
      <span className={styles.featureIcon}>
        <svg width="28" height="28" fill="none" viewBox="0 0 28 28"><circle cx="14" cy="14" r="12" stroke="#0a2a5c" strokeWidth="2" fill="#ffd43b"/><path d="M10 18c1.5-2 6.5-2 8 0" stroke="#0a2a5c" strokeWidth="2" strokeLinecap="round"/><path d="M14 10v2" stroke="#0a2a5c" strokeWidth="2" strokeLinecap="round"/><path d="M14 14h.01" stroke="#0a2a5c" strokeWidth="2" strokeLinecap="round"/></svg>
      </span>
    ),
    title: 'Eco-Conscious',
    desc: 'Committed to reducing our ecological footprint with sustainable practices',
  },
];

export default function NexCoinLanding() {
  return (
    <div className={styles.root}>
      
      {/* Hero Section */}
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              NexCoin:<br />The Future of Digital Currency
            </h1>
            <div className={styles.heroSubtitle}>
              Secure, Sustainable, and<br />Mobile-First Crypto
            </div>
            <button className={styles.getStartedBtn}>Get Started</button>
          </div>
          <div className={styles.heroImage}>
            <img src={heroSectionImg} alt="NexCoin app preview" className={styles.heroImg} />
            {/* Removed Coin illustration and Orbit line */}
          </div>
        </section>

        {/* Features */}
        <section className={styles.features}>
          {features.map((f, i) => (
            <div className={styles.featureCard} key={i}>
              {f.icon}
              <div className={styles.featureTitle}>{f.title}</div>
              <div className={styles.featureDesc}>{f.desc}</div>
            </div>
          ))}
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
