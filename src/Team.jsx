import React from "react";
import styles from "./Team.module.css";
import Footer from "./Footer";

const teamMembers = [
  {
    name: "John Doe",
    role: "CEO",
    desc: "Experienced leader in the financial technology indusry. Leads the company’s vision and strategy.",
    color: "#FFD12A"
  },
  {
    name: "Jane Smith",
    role: "CTO",
    desc: "Brings years of blockchain expertise to the team. Oversees the technology development.",
    color: "#FFD12A"
  },
  {
    name: "Richard Roe",
    role: "CFO",
    desc: "His background in finance and focus managem bancom’s financial operations.",
    color: "#FFD12A"
  },
  {
    name: "Sarah Brown",
    role: "COO",
    desc: "Focus on operational efficiency and drive business growth.",
    color: "#FFD12A"
  }
];

const Team = () => {
  return (
    <div className={styles.teamPage}>
      <div className={styles.headerSection}>
        <h1 className={styles.title}>Meet the NexCoin Team</h1>
      </div>
      <div className={styles.cardsGrid}>
        {teamMembers.map((member, idx) => (
          <div className={styles.memberCard} key={member.name}>
            <div className={styles.avatar}>
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                <circle cx="40" cy="40" r="40" fill="#F2F4F8"/>
                <circle cx="40" cy="32" r="16" fill="#D9D9D9"/>
                <ellipse cx="40" cy="60" rx="22" ry="14" fill="#D9D9D9"/>
              </svg>
            </div>
            <div className={styles.memberName} style={{color: member.color}}>{member.name}</div>
            <div className={styles.memberRole}>{member.role}</div>
            <div className={styles.memberDesc}>{member.desc}</div>
          </div>
        ))}
      </div>
      <div className={styles.visionBox}>
        <h2>Our Vision</h2>
        <p>Our team is dedicated to building innovative and trustworthy cryptocurrency solutions for the future.</p>
      </div>
      <Footer/>
    </div>
  );
};

export default Team;
