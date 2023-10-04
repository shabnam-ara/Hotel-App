// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import CityTabs from './CityTabs'; // Import CityTabs here
import PropertyList from './PropertyList';
import PropertyDetail from './PropertyDetail';

const cities = ['New York', 'Mumbai', 'Paris', 'London'];

const properties = [
  
  { id: 1, name: 'RCE Theaters-907 S Beckford Dr, Henderson,NC 27536', description: 'Description 1', image: 'https://tse1.mm.bing.net/th?id=OIP.p3NxtomRr9KV5zt8uUNingHaE8&pid=Api&P=0&h=220' },
  { id: 2, name: 'Costco Wholesale-1021 Oak Forest Ln Myrtle Beach,Sc', description: 'Description 2', image: 'https://tse4.mm.bing.net/th?id=OIP.6KmhVDEcE3fOYBKoqHljNwHaE7&pid=Api&P=0&h=220' },
  { id: 3, name: 'Legal North Hills-4150 Main at North Hills St, Releign', description: 'Description 3', image: 'https://tse3.mm.bing.net/th?id=OIP.sHH7VXBsdeoGYUS75Df3jAHaEK&pid=Api&P=0&h=220' },
   { id: 1, name: 'Spring Lane Cinemas-1351 Plaza Blvd, Sanford, NC 27330', description: 'Description 1', image: 'https://tse2.mm.bing.net/th?id=OIP.mHhYQAFZZEGYhgxS7PFYsAHaE8&pid=Api&P=0&h=220' },
   { id: 5, name: 'Dollr General-5416 Rock Quarry Rd, Raleigh,NC 27610', description: 'Description 5', image: 'https://tse1.mm.bing.net/th?id=OIP.wdd4mcS5wYM6fDEIKRmc-QHaEK&pid=Api&P=0&h=220' },
  { id: 5, name: 'Dollr General-5416 Rock Quarry Rd, Raleigh,NC 27610', description: 'Description 5', image: 'https://tse3.mm.bing.net/th?id=OIP.Qlpt12rnPB_o9MFh5xu1iwHaEk&pid=Api&P=0&h=220' },
 
  // Add more properties with unique IDs
];

function App() {
  // Define the onTabClick function here
  const onTabClick = (city) => {
    // Implement your logic here
    console.log(`Clicked on ${city}`);
  };

  return (
    <div className='center-content'>
    
      <h1>Featured Listed Property</h1>
         <p>Real estate can be bought, sold, or rented, and can be a <br/>
        valuable investment opportunity. The value of real estate can be..
      </p>
     
      <BrowserRouter>
        <CityTabs cities={cities} onTabClick={onTabClick} /> {/* Place CityTabs outside of Routes */}
        <Routes>
          <Route path="/" element={<PropertyList properties={properties.slice(0, 6)} />} />
          <Route path="/property/:id" element={<PropertyDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
