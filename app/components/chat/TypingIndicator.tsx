import React from "react";
import styles from "../chat.module.css";

const TypingIndicator = () => {
  return (
    <div className={styles.typingIndicator}>
      <div className={styles.typingBubbles}>
        <div className={styles.typingBubble}></div>
        <div className={styles.typingBubble}></div>
        <div className={styles.typingBubble}></div>
      </div>
      <span className={styles.typingText}>Teddy is typing...</span>
    </div>
  );
};

export default TypingIndicator; 