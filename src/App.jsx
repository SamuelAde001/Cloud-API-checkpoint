// src/App.js
import React, { useState } from "react";
import GoogleMap from "./components/GoogleMap";

const App = () => {
  // State to manage the visibility of the map
  const [showMap, setShowMap] = useState(false);

  // Function to handle the "Get Started" button click
  const handleGetStarted = () => {
    setShowMap(true);
  };

  // Function to handle the "Remove Map" button click
  const handleRemoveMap = () => {
    setShowMap(false);
  };

  return (
    // Main container for the entire app
    <div
      className={`h-screen bg-sky-500 flex flex-col gap-20 items-center justify-center`}
    >
      {/* Title */}
      <h1
        style={{ textShadow: "5px 5px 5px black" }}
        className="text-white font-sans font-black text-5xl"
      >
        Explore the world with this Map API
      </h1>

      {/* Button to initiate map display */}
      <button
        className="bg-white p-10 text-lg font-bold rounded-xl hover:scale-110 transition-transform ease-in-out shadow-lg hover:shadow-2xl text-sky-500"
        onClick={handleGetStarted}
      >
        Start here
      </button>

      {/* Conditionally render the GoogleMap component when showMap is true */}
      {showMap && <GoogleMap showMap={showMap} onRemoveMap={handleRemoveMap} />}
    </div>
  );
};

export default App;
