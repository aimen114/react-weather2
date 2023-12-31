import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div id="forecast" className="forecast">
        <div className="weather-forecast-date">Sat</div>

        <img
          src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
          alt=" "
        />
        <div className="weather-forecast-temp">
          <span className="highestTemp">14°</span> /
          <span className="lowestTemp">9°</span>
          <hr />
        </div>
      </div>
    </div>
  );
}
