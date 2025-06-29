import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage: React.FC = () => (
  <div style={{ padding: "2rem", textAlign: "center" }}>
    <h1>404 — Страница не найдена</h1>
    <Link to="/" style={{ textDecoration: "underline", color: "blue" }}>
      Вернуться на главную
    </Link>
  </div>
);

export default NotFoundPage;