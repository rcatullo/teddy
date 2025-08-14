"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Chat from "./components/chat";
import Hero from "./components/Hero";
import About from "./components/About";
import MenuPreview from "./components/MenuPreview";
import Footer from "./components/Footer";
import ChatToggle from "./components/ChatToggle";

const Home = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {/* Main content area */}
        <div className={styles.mainContent}>
          <Hero />
          <About />
          <MenuPreview />
          <Footer />
        </div>
        
        {/* Chat sidebar */}
        <div className={`${styles.chatSidebar} ${isChatOpen ? styles.open : styles.closed}`}>
          <Chat />
        </div>
        
        {/* Toggle button */}
        <ChatToggle isOpen={isChatOpen} onToggle={toggleChat} />
      </div>
    </main>
  );
};

export default Home;
