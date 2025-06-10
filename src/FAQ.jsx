import React from 'react';
import styles from './FAQ.module.css';
import Footer from './Footer';

const faqs = [
  {
    question: 'What is NexCoin?',
    answer: 'NexCoin is a next-generation cryptocurrency designed for speed, security, and sustainability.'
  },
  {
    question: 'How can I buy NexCoin?',
    answer: 'You can buy NexCoin through our official exchange partners or directly from our app.'
  },
  {
    question: 'Is NexCoin secure?',
    answer: 'Yes, NexCoin uses advanced blockchain technology and security protocols to keep your assets safe.'
  },
  {
    question: 'What makes NexCoin sustainable?',
    answer: 'NexCoin uses an eco-friendly consensus mechanism to minimize environmental impact.'
  }
];

function FAQ() {
  const [openIndex, setOpenIndex] = React.useState(null);

  const handleToggle = idx => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className={styles.faqPage}>
      <div className={styles.headerSection}>
        <h1 className={styles.faqTitle}>FAQ</h1>
        <p className={styles.subtitle}>Frequently Asked Questions</p>
      </div>
      <div className={styles.faqListSection}>
        {faqs.map((faq, idx) => (
          <div key={idx} className={styles.faqItem}>
            <button className={styles.faqQuestion} onClick={() => handleToggle(idx)}>
              <span>{faq.question}</span>
              <span className={styles.plusIcon}>{openIndex === idx ? '-' : '+'}</span>
            </button>
            {openIndex === idx && (
              <div className={styles.faqAnswer}>{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
      <div className={styles.moreQuestionsSection}>
        <h2>Have more questions?</h2>
        <p>Contact us for more information.</p>
        <a href="/contact" className={styles.contactButton}>Contact Us</a>
      </div>
      <Footer />
    </div>
  );
}

export default FAQ;
