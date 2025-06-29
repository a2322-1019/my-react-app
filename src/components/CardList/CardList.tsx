import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import type { CardData } from '../../Type';
import defaultStyles from "../../assets/styles/InfoSection.module.css";

interface CardListProps {
  limit?: number;
  containerClassName?: string; // новый проп для кастомного класса контейнера
}

const CardList: React.FC<CardListProps> = ({ limit = 10, containerClassName }) => {
  const [cards, setCards] = useState<CardData[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=3`)
      .then(res => res.json())
      .then(data => {
        const cardsData: CardData[] = data.map((item: any, index: number) => ({
          id: item.id,
          title: `Comment ${index + 1}`,
          text: item.body,
          image: null,
        }));
        setCards(cardsData);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [limit]);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <div className={containerClassName ? containerClassName : defaultStyles.features} id="features-container">
      {cards.map(card => (
        <div key={card.id} className={defaultStyles.feature}>
          <Card
            title={card.title}
            text={card.text}
            image={card.image}
            onClick={() => console.log(card.image)}
          />
        </div>
      ))}
    </div>
  );
};

export default CardList;