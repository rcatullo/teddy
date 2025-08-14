import React from "react";
import styles from "../page.module.css";

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.aboutContent}>
        <h2 className={styles.sectionTitle}>Our Story</h2>
        <p className={styles.aboutText}>
          Since 2003, Philz Coffee has been crafting the perfect cup of coffee 
          for each individual customer. We believe in the power of a great cup 
          of coffee to bring people together and create meaningful connections.
        </p>
        <a href="/not-found" className={styles.textLink}>Learn More →</a>
      </div>
    </section>
  );
};

export default About; 