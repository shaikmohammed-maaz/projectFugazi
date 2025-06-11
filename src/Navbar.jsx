import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'Home', to: '/projectFugazi' },
  { label: 'About', to: '/about' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Download', to: '/download' },
  { label: 'Whitepaper', to: '/WhitePaper' },
  { label: 'Team', to: '/Team' },
];

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span className={styles.logoIcon}>N</span>
          NexCoin
        </div>
        <button
          className={styles.menuBtn}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(open => !open)}
        >
          <svg
            className={styles.menuIcon}
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <nav
          className={`${styles.nav} ${menuOpen ? styles.open : ''}`}
        >
          {navLinks.map(link => (
            <Link
              key={link.label}
              to={link.to}
              className={
                location.pathname === link.to
                  ? `${styles.navLink} ${styles.active}`
                  : styles.navLink
              }
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}