import React, { useState, useEffect } from "react";

function ToursByComparison() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  // Use a proxy to avoid CORS issues during development
  const apiUrl = "https://course-api.com/react-tours-project";
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";

  useEffect(() => {
    fetch(apiUrl + proxyUrl)
      .then((response) => response.json())
      .then((data) => {
        setTours(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Failed to load tours. Please try again later.", error);
      }, []);
    if (loading) return <p>Loading all tours...</p>;
    return (
      <div>
        <h2>Comparing Tours </h2>
        <ul>
          {tours.map((tour) => (
            <li key={tour.id}>
              <img src={tour.image[0].url} alt={tour.name}></img>
              {tour.name}
              {tour.info} ${tour.price}
            </li>
          ))}
        </ul>
        <button onClick={() => tours.info}> Show More</button>
        <button onClick={() => tours}> Not Interested</button>
      </div> // Working on buttons
    );
  });
}

export default ToursByComparison;
