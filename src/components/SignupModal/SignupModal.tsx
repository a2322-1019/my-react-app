import React, { useState } from "react";
import styles from "../../assets/styles/SignupModal.module.css";

interface SignupModalProps {
  open: boolean;
  onClose: () => void;
  onSignupSuccess: (nickname: string) => void;
}

const SignupModal: React.FC<SignupModalProps> = ({ open, onClose, onSignupSuccess }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username && email && password) {
      // Здесь должна быть ваша логика регистрации (API)
      onSignupSuccess(username);
    } else {
      alert("Пожалуйста, заполните все поля");
    }
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <span className={styles.close} onClick={onClose}>&times;</span>
        <h2>Регистрация</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Имя пользователя:</label>
          <input
            type="text"
            id="username"
            name="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="email">Электронная почта:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Пароль:</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className={styles.buttonokno} type="submit">Зарегистрироваться</button>
        </form>
      </div>
    </div>
  );
};

export default SignupModal;