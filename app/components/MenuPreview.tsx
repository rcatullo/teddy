import React from "react";
import styles from "../page.module.css";
import MenuItem from "./MenuItem";
import { POPULAR_DRINKS } from "../constants/menu";

const MenuPreview = () => {
  return (
    <section className={styles.menuPreview}>
      <h2 className={styles.sectionTitle}>Popular Drinks</h2>
      <div className={styles.menuGrid}>
        {POPULAR_DRINKS.map((drink, index) => (
          <MenuItem
            key={index}
            imageUrl={drink.imageUrl}
            title={drink.title}
            description={drink.description}
            altText={drink.altText}
          />
        ))}
      </div>
      <a href="/menu" className={styles.textLink}>View Full Menu →</a>
    </section>
  );
};

export default MenuPreview; 