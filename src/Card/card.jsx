import React, { useRef } from 'react';
import style from './card.module.css';

function Card(props) {
  const cardRef = useRef(null);
  const spinning = useRef(false);

  const handleClick = () => {
    if (spinning.current) return;

    const card = cardRef.current;
    spinning.current = true;

    // Add spin animation class
    card.classList.add(style.spinning);

    // Wait for animation to finish (based on CSS duration)
    setTimeout(() => {
      card.classList.remove(style.spinning); // Remove spin class
      spinning.current = false;
    }, 1500); // Should match the animation duration in CSS
  };

  return (
    <div
      ref={cardRef}
      className={style.card}
      onClick={handleClick}
    >
      <div className={style.image}>
        {props.icon}
      </div>
      {props.heading}
      <div className={style.describe}>
        {props.description}
      </div>
    </div>
  );
}

export default Card;
