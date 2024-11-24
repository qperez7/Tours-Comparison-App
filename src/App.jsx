import ToursByComparison from "./components/Gallery";
import "./components/App.css";

function App() {
  return (
    <>
      <div className="grid-container">
        <div className="tour-card">
          <div className="center-text">
            <div>
              <ToursByComparison />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
