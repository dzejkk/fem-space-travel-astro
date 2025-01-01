import React, { useState, useEffect } from "react";
import useCrewData from "../hooks/useCrewData";

export default function Crew() {
  const {crew, error, loading, currentIndex, setCurrentIndex} = useCrewData();
 


  if(loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const currentCrew = crew[currentIndex] || {};


  return (
    <>
      <div className="grid-container grid-container--crew flow">
        <h1 className="numbered-title">
          <span aria-hidden="true">02</span> Meet your crew
        </h1>
        <div className="dot-indicators flex">
          {crew.map((person, index) => (
            <button
              key={person.name}
              aria-selected={index === currentIndex}
              onClick={() => setCurrentIndex(index)}
              className="sr-only"
            >
              {person.name}
            </button>
          ))}
        </div>
        {crew.length > 0 && (
          <>
            <article className="crew-details">
              <header className="flow flow--space-small">
                <h2 className="fs-600 ff-serif uppercase">{currentCrew.role}</h2>
                <p className="fs-700 uppercase ff-serif">{currentCrew.name}</p>
              </header>
              <p>{currentCrew.bio}</p>
            </article>
            <img src={currentCrew.images.png} alt={currentCrew.name} />
          </>
        )}
      </div>
    </>
  );
}
