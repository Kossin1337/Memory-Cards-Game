import React from "react";

export const Card = ({ src }) => {
  return (
    <div className="card">
      <img className="front" src={src} alt="card front" />
      <img className="back" src="/img/cover.png" alt="card back" />
    </div>
  );
};
