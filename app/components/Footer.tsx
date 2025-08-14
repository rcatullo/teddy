import React from "react";
import styles from "../page.module.css";
import { FOOTER_SECTIONS } from "../constants/footer";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {FOOTER_SECTIONS.map((section, index) => (
          <div key={index} className={styles.footerSection}>
            <h4>{section.title}</h4>
            <ul>
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a href={link.href}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2024 Philz Coffee. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 