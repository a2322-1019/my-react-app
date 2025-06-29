import React from "react";
import styles from "../../assets/styles/ConnectSection.module.css";

const ConnectSection: React.FC = () => (
  <section className={styles.connect}>
    <div className={styles.container}>
      <img src="img/connect-image.png" alt="Connect with Recruiter" className={styles.connectImage} />
      <div className={styles.connectText}>
        <h1>Connect With Recruiter</h1>
        <p>
          Get instant access to a curated pool of top creative & tech talent actively seeking their next role. Find highly qualified job!
        </p>
      </div>
    </div>
  </section>
);

export default ConnectSection;