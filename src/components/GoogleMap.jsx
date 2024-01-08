// src/GoogleMap.js
import React from "react";
import GoogleMapReact from "google-map-react";
import { LocationPin } from "./LocationPin";

const GoogleMap = ({ showMap, onRemoveMap }) => {
  // Location data for the map marker
  const location = {
    address: "Go mu code Abuja",
    lat: 9.076736,
    lng: 7.4678272,
  };

  return (
    // Container for the Google Map component
    <div
      className={`absolute inset-0 bg-sky-500 h-screen flex gap-10 p-10 items-center justify-center text-white transition-opacity ease-in-out flex-col`}
    >
      {/* Title */}
      <h1 className="text-4xl font-bold mb-4">Google Maps</h1>

      {/* Button to remove the map */}
      <button
        className="bg-white p-4 text-lg font-bold rounded-xl hover:scale-110 transition-transform ease-in-out shadow-lg hover:shadow-2xl text-sky-500 z-20 absolute top-0 left-10 mt-10"
        onClick={onRemoveMap}
      >
        Remove map
      </button>

      {/* Section containing the Google Map */}
      <section className="flex-1 w-[800px] h-[200px] border-4 border-white border-solid rounded-lg shadow-md">
        {/* GoogleMapReact component for rendering the map */}
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDNAAFL4E-brbWMAGakIVPcP1OLI8IvtuQ" }}
          defaultCenter={location}
          defaultZoom={17}
        >
          {/* LocationPin component to mark the specified location on the map */}
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </section>
    </div>
  );
};

export default GoogleMap;
