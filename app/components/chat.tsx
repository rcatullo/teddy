"use client";

import React from "react";
import styles from "./chat.module.css";
import { RequiredActionFunctionToolCall } from "openai/resources/beta/threads/runs/runs";
import { useChat } from "../hooks/useChat";
import ChatHeader from "./chat/ChatHeader";
import Message from "./chat/Message";
import TypingIndicator from "./chat/TypingIndicator";
import ChatInput from "./chat/ChatInput";

type ChatProps = {
  functionCallHandler?: (
    toolCall: RequiredActionFunctionToolCall
  ) => Promise<string>;
};

const Chat = ({
  functionCallHandler = () => Promise.resolve(""),
}: ChatProps) => {
  const {
    userInput,
    setUserInput,
    messages,
    inputDisabled,
    isTyping,
    imagePreview,
    messagesEndRef,
    handleImageSelect,
    removeImage,
    handleSubmit,
  } = useChat(functionCallHandler);

  return (
    <div className={styles.chatContainer}>
      <ChatHeader />
      <div className={styles.messages}>
        {messages.map((msg, index) => (
          <Message key={index} role={msg.role} text={msg.text} imageUrl={msg.imageUrl} />
        ))}
        {isTyping && <TypingIndicator />}
        <div ref={messagesEndRef} />
      </div>
      <ChatInput
        userInput={userInput}
        setUserInput={setUserInput}
        inputDisabled={inputDisabled}
        imagePreview={imagePreview}
        onImageSelect={handleImageSelect}
        onRemoveImage={removeImage}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default Chat;
