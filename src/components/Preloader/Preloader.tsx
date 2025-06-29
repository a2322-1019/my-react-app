import React from "react";
import styles from "../../assets/styles/Preloader.module.css";

const Preloader: React.FC = () => (
  <div className={styles.preloader}>
    <div className={styles.loader}></div>
  </div>
);

export default Preloader;