import React from "react";
import styles from "../page.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Philz Coffee</h1>
        <p className={styles.heroSubtitle}>
          One cup at a time, one customer at a time
        </p>
        <div className={styles.heroButtons}>
          <a href="/not-found" className={styles.primaryButton}>
            Explore Our Menu
          </a>
          <a href="/not-found" className={styles.secondaryButton}>
            Find a Location
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero; 