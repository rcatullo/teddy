"use client";

import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

const NotFound = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.mainContent}>
          <section className={styles.hero} style={{ minHeight: '100vh' }}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle} style={{ fontSize: '6rem', marginBottom: '20px' }}>
                404
              </h1>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', fontFamily: 'Great Vibes, cursive' }}>
                Page Not Found
              </h2>
              <p className={styles.heroSubtitle}>
                Looks like this page has been brewed away...
              </p>
              <div className={styles.heroButtons}>
                <Link href="/" className={styles.primaryButton}>
                  Back to Home
                </Link>
                <Link href="/not-found" className={styles.secondaryButton}>
                  Explore Our Menu
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default NotFound; 