import React from "react";
import type { CardProps } from '../../Type';

const Card: React.FC<CardProps> = ({ title, text, image, onClick }) => (
  <div onClick={onClick} style={{ cursor: onClick ? "pointer" : "default" }}>
    <h3>{title}</h3>
    <p>{text}</p>
    {image && <img src={image} alt={title} />}
  </div>
);

export default Card;