import { useState, useEffect } from "react"; // Gives error when I add React, {} from "react"

const fetchTours = async () => {
  await fetch("https://www.course-api.com/react-tours-project");
};
function ToursByComparison() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTours()
      .then((response) => response.json())
      .then((data) => {
        setTours(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        return error;
      });
  });

  if (loading) return <p>Loading all tours...</p>;
  return (
    (
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
    ),
    [] //Dependancy array
  );
}

export default ToursByComparison;
