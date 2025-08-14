import React from "react";
import styles from "../page.module.css";

interface MenuItemProps {
  imageUrl: string;
  title: string;
  description: string;
  altText: string;
}

const MenuItem = ({ imageUrl, title, description, altText }: MenuItemProps) => {
  return (
    <div className={styles.menuItem}>
      <div className={styles.menuItemImage}>
        <img src={imageUrl} alt={altText} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default MenuItem; 