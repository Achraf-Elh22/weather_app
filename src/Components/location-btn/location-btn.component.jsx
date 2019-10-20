import React from "react";

import "./location-btn.styles.css";

const LocationBtn = () => {
  return (
    <div className="location-container">
      <button className="location-button">
        <i data-feather="map-pin"></i>
        <span>Change location</span>
      </button>
    </div>
  );
};

export default LocationBtn;
