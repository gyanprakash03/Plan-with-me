import React, { useState } from "react";
import data from "./data";
import Tours from "./components/tours";

const App = () => {

  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const newTours = tours.filter( tour => {
      if (tour.id !== id) {
        return tour;
      }
    });
    setTours(newTours);
  }

  function refreshButtonHandler() {
    setTours(data);
  }

  if (tours.length === 0) {
    return (
      <div className="refresh-container">
        <div className="no-available">No Available Tours</div>
        <button className="refresh-btn" onClick={refreshButtonHandler}>Refresh</button>
      </div>
    )
  }

  return (
    <div>
      <h1 className="heading">Plan With Me</h1>
      <Tours tourList={tours} removeTour={removeTour}></Tours>
    </div>
  );
};

export default App;
