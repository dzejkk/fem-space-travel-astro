import React, { useState, useEffect } from "react";

export default function Crew() {
  const [crew, setCrew] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); // Default to the first crew member

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../../data.json");
        const data = await response.json(); // Await the JSON parsing
        setCrew(data.crew);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // Ensure `currentIndex` is valid
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
