import React from "react";
import styles from "../../assets/styles/Footer.module.css";

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className={styles.foot_all}>
      <div className={styles.footer__right}>
        <p className={styles.footer__text}>Jobly.co</p>
        <p className={styles.footer__text}>We support a pool of diverse young creatives and engineers.</p>
        <p className={styles.footer__text}>© 2023 Jobly.co Copyright and All rights reserved.</p>
      </div>
      <div className={styles.foot_left}>
        <a className={styles.footer__link} href="#terms">Terms and Conditions</a> · 
        <a className={styles.footer__link} href="#privacy">Privacy Policy</a>
      </div>
    </div>
  </footer>
);

export default Footer;