import React from "react";
import styles from "../chat.module.css";

const ChatHeader = () => {
  return (
    <div className={styles.chatHeader}>
      <div className={styles.assistantInfo}>
        <div className={styles.assistantAvatar}>☕</div>
        <div className={styles.assistantDetails}>
          <h3 className={styles.assistantName}>Teddy</h3>
          <p className={styles.assistantRole}>Shopping Assistant</p>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader; 