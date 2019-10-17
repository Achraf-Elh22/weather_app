import React from "react";

import "./location-btn.styles.css";

const LocationBtn = () => {
  return (
    <div class="location-container">
      <button class="location-button">
        {" "}
        <i data-feather="map-pin"></i>
        <span>Change location</span>
      </button>
    </div>
  );
};

export default LocationBtn;
