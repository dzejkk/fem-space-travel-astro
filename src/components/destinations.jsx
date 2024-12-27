import React from "react";
import { useState, useEffect } from "react";

export default function Destinations() {
  const [destinations, setDestinations] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);


  /* pulling data from json */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../../data.json");
        const data = await response.json();
        setDestinations(data.destinations);
      } catch (error) {
        console.error("Error fetching destinations:", error);
      }
    };
    fetchData();
  }, []);

  /*------------------------*/


  if (!destinations.length) return null;

  const current = destinations[currentIndex];

  return (
    <div className="destination grid-container grid-container--destination flow">
     <h1 className="numbered-title">
       <span aria-hidden="true">01</span> Pick your destination
     </h1>
     
     <img src={current.images.png} alt={current.name} />
     
     <div className="tab-list underline-indicators flex">
       {destinations.map((dest, i) => (
         <button
           key={dest.name}
           onClick={() => setCurrentIndex(i)}
           aria-selected={i === currentIndex}
           className="uppercase ff-sans-cond text-accent letter-spacing-2"
         >
           {dest.name}
         </button>
       ))}
     </div>

     <article className="destination-info">
       <h2 className="fs-800 uppercase ff-serif">{current.name}</h2>
       <p>{current.description}</p>
       
       <div className="destination-meta flex">
         <div>
           <h3 className="text-accent fs-200 uppercase">Avg. distance</h3>
           <p className="ff-serif uppercase">{current.distance}</p>
         </div>
         <div>
           <h3 className="text-accent fs-200 uppercase">Est. travel time</h3>
           <p className="ff-serif uppercase">{current.travel}</p>
         </div>
       </div>
     </article>
   </div>
  ) ;
}
