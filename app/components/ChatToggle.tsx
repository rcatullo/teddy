import React from "react";
import styles from "../page.module.css";

interface ChatToggleProps {
  isOpen: boolean;
  onToggle: () => void;
}

const ChatToggle = ({ isOpen, onToggle }: ChatToggleProps) => {
  return (
    <button 
      className={`${styles.toggleButton} ${isOpen ? styles.open : styles.closed}`}
      onClick={onToggle}
      aria-label={isOpen ? "Close chat" : "Open chat"}
    >
      {isOpen ? "×" : "☕"}
    </button>
  );
};

export default ChatToggle; 