import React from "react";
import styles from "./Whitepaper.module.css";
import whitepaperImg from './assets/whitepaper.png';
import Footer from "./Footer";

function useIsMobile(breakpoint = 600) {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= breakpoint);
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= breakpoint);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);
  return isMobile;
}

const Whitepaper = () => {
  const isMobile = useIsMobile();

  return (
    <div className={styles.whitepaperPage}>
      <div className={styles.headerSection}>
        <h1 className={styles.title}>NexCoin Whitepaper</h1>
        {isMobile && (
          <div className={styles.illustration}>
            <img
              src={whitepaperImg}
              alt="NexCoin Whitepaper Illustration"
              className={styles.illustrationImg}
            />
          </div>
        )}
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
        {!isMobile && (
          <div className={styles.illustration}>
            <img
              src={whitepaperImg}
              alt="NexCoin Whitepaper Illustration"
              className={styles.illustrationImg}
            />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Whitepaper;