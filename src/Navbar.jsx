import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Download', to: '/download' },
  { label: 'Whitepaper', to: '/WhitePaper' },
  { label: 'Team', to: '/Team' },
];

export default function Navbar() {
  const location = useLocation();
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span className={styles.logoIcon}>N</span>
        NexCoin
      </div>
      <nav className={styles.nav}>
        {navLinks.map(link => (
          <Link
            key={link.label}
            to={link.to}
            className={
              location.pathname === link.to
                ? `${styles.navLink} ${styles.active}`
                : styles.navLink
            }
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
