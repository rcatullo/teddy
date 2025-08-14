import React from "react";
import styles from "../chat.module.css";

interface ChatInputProps {
  userInput: string;
  setUserInput: (value: string) => void;
  inputDisabled: boolean;
  imagePreview: string | null;
  onImageSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemoveImage: () => void;
  onSubmit: (e: React.FormEvent) => void;
}

const ChatInput = ({
  userInput,
  setUserInput,
  inputDisabled,
  imagePreview,
  onImageSelect,
  onRemoveImage,
  onSubmit
}: ChatInputProps) => {
  return (
    <form
      onSubmit={onSubmit}
      className={`${styles.inputForm} ${styles.clearfix}`}
    >
      <div className={styles.inputContainer}>
        {imagePreview && (
          <div className={styles.imagePreview}>
            <img src={imagePreview} alt="Preview" />
          </div>
        )}
        <div className={styles.inputArea}>
          <input
            type="text"
            className={styles.input}
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Enter your question"
            disabled={inputDisabled}
          />
          <div className={styles.imageControls}>
            <label htmlFor="image-upload" className={styles.imageButton}>
              +
            </label>
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              onChange={onImageSelect}
              style={{ display: 'none' }}
              disabled={inputDisabled}
            />
            {imagePreview && (
              <button
                type="button"
                onClick={onRemoveImage}
                className={styles.removeImageButton}
              >
                ✕
              </button>
            )}
          </div>
          <button
            type="submit"
            className={styles.button}
            disabled={inputDisabled}
          >
            Send
          </button>
        </div>
      </div>
    </form>
  );
};

export default ChatInput; 