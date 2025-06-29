import React, { useState } from "react";
import styles from "../../assets/styles/LoginModal.module.css";

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
  onLoginSuccess: (nickname: string) => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ open, onClose, onLoginSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username && password) {
      // Здесь должна быть ваша логика авторизации (API)
      onLoginSuccess(username);
    } else {
      alert("Введите имя пользователя и пароль");
    }
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <span className={styles.close} onClick={onClose}>&times;</span>
        <h2>Вход</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="loginUsername">Имя пользователя:</label>
          <input
            type="text"
            id="loginUsername"
            name="loginUsername"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="loginPassword">Пароль:</label>
          <input
            type="password"
            id="loginPassword"
            name="loginPassword"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className={styles.buttonokno} type="submit">Войти</button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;