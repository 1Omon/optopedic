'use client';
import React, { useState } from 'react';

const distances = ['25cm', '40cm', '75cm', '100cm'];

const colors = ['red', 'green', 'blue', 'yellow'];

const zDistances: { [key: string]: number } = {
  '25cm': -100,
  '40cm': -200,
  '75cm': -350,
  '100cm': -500,
};

const PhaseFour: React.FC = () => {
  const [highlightedColor, setHighlightedColor] = useState(colors[0]);
  const [currentDistance, setCurrentDistance] = useState(distances[0]);

  const changeHighlight = () => {
    const nextIndex = (colors.indexOf(highlightedColor) + 1) % colors.length;
    setHighlightedColor(colors[nextIndex]);
  };

  const changeDistance = (distance: string) => {
    setCurrentDistance(distance);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="header">
          <h2>Brock String Exercise</h2>
        </div>
        <div className="threed-space">
          {colors.map((color, index) => (
            <div
              key={color}
              className={`color-ball ${highlightedColor === color ? 'border-highlight' : ''}`}
              style={{
                backgroundColor: color,
                transform: `translateZ(${zDistances[currentDistance]}px) translateX(${index * 50 - 75}px)`,
              }}
            ></div>
          ))}
        </div>
        <button className="button" onClick={changeHighlight}>
          Next Color
        </button>
        <div className="distance-buttons">
          {distances.map((distance) => (
            <button
              key={distance}
              onClick={() => changeDistance(distance)}
              className={`distance-button ${currentDistance === distance ? 'active-distance' : ''}`}
            >
              {distance}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhaseFour;
