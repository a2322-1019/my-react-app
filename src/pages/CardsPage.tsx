import React from "react";
import { useSearchParams } from "react-router-dom";
import CardList from "../components/CardList/CardList";
import styles from "./CardsPage.module.css";

const CardsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const limitParam = searchParams.get("limit");
  const limit = limitParam ? parseInt(limitParam, 10) : 10;

  return (
    <div className={styles.container}>
      <h1>Страница со списком карточек</h1>
      {/* Передаем класс для сетки карточек */}
      <CardList limit={limit} containerClassName={styles.cardsGrid} />
    </div>
  );
};

export default CardsPage;