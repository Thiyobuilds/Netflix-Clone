import React, { useEffect, useRef } from "react";
import "./TitleCard.css";
import card_data from "../assets/cards/Cards_data";

const TitleCard = ({title, category}) => {
  
  const cardsRef = useRef();

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="title-card">
      <h2>Popular On Netflix</h2>
      <div ref={cardsRef} className="card-list">
        {card_data.map((data, index) => {
          return (
            <div key={index} className="card">
              <img src={data.image} alt={`Card Img ${index}`} />
              <p>{data.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCard;
