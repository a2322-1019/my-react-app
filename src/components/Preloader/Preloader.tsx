
import React, { useEffect, useState } from 'react';
import styles from "../../assets/styles/Preloader.module.css";

// const Preloader: React.FC = () => (
// //   <div className={styles.preloader}>
// //     <div className={styles.loader}></div>
// //   </div>


// <div className={styles.preloader}>
//       <div className={styles.preloaderRow}>
//         <div className={styles.preloaderItem}></div>
//         <div className={styles.preloaderItem}></div>
//       </div>
//     </div>

// );

// export default Preloader;



interface PreloaderProps {
  /** Длительность анимации в мс */
  duration?: number;
  /** Цвет элементов прелоадера */
  color?: string;
  /** Фон прелоадера */
  backgroundColor?: string;
  /** Размер в пикселях */
  size?: number;
}

const Preloader: React.FC<PreloaderProps> = ({
  duration = 2000,
  color = '#337ab7',
  backgroundColor = '#e0e0e0',
  size = 70
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsVisible(false);
    };

    // Если контент уже загружен
    if (document.readyState === 'complete') {
      setTimeout(() => setIsVisible(false), 300);
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  if (!isVisible) return null;

  const itemSize = size / 2;
  const itemStyle = {
    width: `${itemSize}px`,
    height: `${itemSize}px`,
    backgroundColor: color
  };

  return (
    <div 
      className="preloader"
      style={{ 
        backgroundColor,
        '--duration': `${duration}ms`
      } as React.CSSProperties}
    >
      <div 
        className="preloader__row"
        style={{ width: `${size}px`, height: `${size}px` }}
      >
        <div className="preloader__item" style={itemStyle} />
        <div className="preloader__item" style={itemStyle} />
      </div>
    </div>
  );
};

export default Preloader;
