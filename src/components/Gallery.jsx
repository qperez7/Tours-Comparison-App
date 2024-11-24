import { useState, useEffect } from "react";

function ToursByComparison() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true); // Sets loading to true until results are fetched

  useEffect(() => {
    const fetchTours = async () => {
      const response = await fetch(
        "https://www.course-api.com/react-tours-project"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch tours");
      }
      return response
        .json()

        .then((tours) => {
          setTours(tours);
          setLoading(false);
        })
        .catch((error) => {
          console.log("Error unable to display tours", error); // Displays an error if fetch fails
          setLoading(false);
        });
    };
    fetchTours();
  }, []); //Dependancy array

  if (loading) return <p>Loading all tours...</p>;
  return (
    <div>
      <h1>Comparing Tours </h1>
      <ul>
        {tours.map((tour) => (
          <li key={tour.id}>
            <h2>{tour.name}</h2>
            <img src={tour.image} alt={tour.name}></img>
            <p>{tour.info}</p>
            <p>${tour.price}</p>
            <button className="buttonColor" onClick={() => tour.info}>
              Show More
            </button>
            <button className="buttonColor" onClick={() => tour.name}>
              Not Interested
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToursByComparison;
