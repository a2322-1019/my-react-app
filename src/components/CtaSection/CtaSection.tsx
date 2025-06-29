import React from "react";
import styles from "../../assets/styles/CtaSection.module.css";

const CtaSection: React.FC = () => (
  <section className={styles.cta}>
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1>Set up your profile.<br />Let jobs find you.</h1>
        <button className={styles.ctaButton}>Join Now</button>
      </div>
      <img src="img/job-image.png" alt="Job" className={styles.ctaImage} />
    </div>
  </section>
);

export default CtaSection;