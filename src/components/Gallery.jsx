import React, { useState, useEffect } from "react";

function ToursByComparison() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] =useState(true);
  const [error, setError] =useState ('');
  
  useEffect(() => {
    fetch(`https://course-api.com/react-tours-project`)
      .then((response) => response.json())
      .then(data) => {
        setTours(data);
      setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []); // Runs whenever selectedId changes
if (loading) return 'loading all tours';
if (error) return 'fetch unable to return tours'; 
  return (
    <div>
      <h2>Comparing Tours </h2>
      <ul>
        {tours.map((tour) => (
          <li key={tour.id}>
            {tour.image}
            {tour.name}
            {tour.info}${tour.price}
          </li>
        ))
        }
      </ul>
      <button onClick ={() => (tour.info)}> Show More</button>
      <button onClick ={() => notInterested(tour.id)}> Not Interested</button> 
    </div>
  );
}

export default ToursByComparison;
