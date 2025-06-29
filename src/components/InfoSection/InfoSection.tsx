import React from "react";
import styles from "../../assets/styles/InfoSection.module.css";
import CardList from "../CardList/CardList"; 

const InfoSection = () => {
  return (
    <section className={styles.info}>
      <div className={styles.container}>
        <h1>Everything you want to know in one place.</h1>
        <img id="infoImage" src="img/professional-profile.png" alt="Info" className={styles.infoImage} />
        
        <CardList />
      </div>
    </section>
  );
};

export default InfoSection;