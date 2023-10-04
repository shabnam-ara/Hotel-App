import React from 'react';
import './CityTabs.css';

function CityTabs({ cities, onTabClick, activeCity }) {
  return (
    <div className='city-tabs'>
      {cities.map((city) => (
        <div
          key={city}
          className={`city-tab ${city === 'London' ? 'active' : ''}`}
          onClick={() => onTabClick(city)}
        >
          {city}
        </div>
      ))}
    </div>
  );
}

export default CityTabs;
