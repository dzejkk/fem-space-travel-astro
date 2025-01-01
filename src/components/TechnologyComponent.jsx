import { useState } from 'react';
import useDataFetcher from '../hooks/useDataFetcher'

export default function TechnologyComponent() {


  const { data, error, loading } = useDataFetcher();
  const technologyData = data.technology;
  const [currentIndex, setCurrentIndex] = useState(0);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!technologyData) {
    return <div>No technology data available</div>;
  }


  const currentTech = technologyData[currentIndex];
  

  return (
    <div>
      <>
      <div className="grid-container grid-container--technology flow">
        <h1 className="numbered-title">
          <span aria-hidden="true">03</span> Space Launch 101
        </h1>
        <div className="dot-indicators flex flex-column">
          {technologyData.map((person, index) => (
            <button
              key={person.name}
              aria-selected={index === currentIndex}
              onClick={() => setCurrentIndex(index)}
              className="round-indicator"
            >
              {index + 1}
            </button>
          ))}
        </div>
        {technologyData.length > 0 && (
          <>
            <article className="crew-details">
              <header className="flow flow--space-small">
                <p className="fs-700 uppercase ff-serif">{currentTech.name}</p>
              </header>
              <p>{currentTech.description}</p>
            </article>
            <img src={currentTech.images.portrait} alt={currentTech.name} />
          </>
        )}
      </div>
    </>
      
    </div>
  )
}
