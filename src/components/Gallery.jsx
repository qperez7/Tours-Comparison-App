import { useState, useEffect } from "react"; // Gives error when I add React, {} from "react"

function ToursByComparison() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTours = async () => {
      const response = await fetch(
        "https://www.course-api.com/react-tours-project"
      );
      const tours = await response
        .json()
        .then(() => {
          setTours(tours);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          return error;
        });
    };
    fetchTours();
  }, []); //Dependancy array

  const ShowMore = () => {
    (prev) => prev.info;
  };
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
      <button onClick={ShowMore}> Show More</button>
      <button onClick={() => tours}> Not Interested</button>
    </div> // Working on buttons
  );
}

export default ToursByComparison;
