import React, { useState, useEffect } from "react";
import styles from "../../assets/styles/SliderSection.module.css";

const images = [
  "img/1.jpg",
  "img/2.jpg",
  "img/3.jpg",
];

const SliderSection: React.FC = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    // Запускаем интервал, который переключает слайд каждые 5 секунд (5000 мс)
    const interval = setInterval(() => {
      setActive(prev => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);

    // Очищаем интервал при размонтировании компонента
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.bloktem}>
      <div className={styles.slider}>
        {images.map((src, idx) => (
          <img
            key={src}
            src={src}
            alt={`Image ${idx + 1}`}
            className={`${styles.heroImage} ${active === idx ? styles.active : ""}`}
          />
        ))}
        {/* Кнопки убраны */}
      </div>
    </section>
  );
};

export default SliderSection;