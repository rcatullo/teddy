import React from "react";
import styles from "../chat.module.css";
import Markdown from "react-markdown";

type MessageProps = {
  role: "user" | "assistant" | "code";
  text: string;
  imageUrl?: string;
};

const UserMessage = ({ text, imageUrl }: { text: string; imageUrl?: string }) => {
  return (
    <div className={styles.userMessage}>
      {imageUrl && (
        <img src={imageUrl} alt="User uploaded image" className={styles.userImage} />
      )}
      {text && <div>{text}</div>}
    </div>
  );
};

const AssistantMessage = ({ text }: { text: string }) => {
  return (
    <div className={styles.assistantMessage}>
      <Markdown>{text}</Markdown>
    </div>
  );
};

const CodeMessage = ({ text }: { text: string }) => {
  return (
    <div className={styles.codeMessage}>
      {text.split("\n").map((line, index) => (
        <div key={index}>
          <span>{`${index + 1}. `}</span>
          {line}
        </div>
      ))}
    </div>
  );
};

const Message = ({ role, text, imageUrl }: MessageProps) => {
  switch (role) {
    case "user":
      return <UserMessage text={text} imageUrl={imageUrl} />;
    case "assistant":
      return <AssistantMessage text={text} />;
    case "code":
      return <CodeMessage text={text} />;
    default:
      return null;
  }
};

export default Message; 