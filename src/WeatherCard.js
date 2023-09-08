import React from "react";
import TodayInfo from "./TodayInfo";
import Forecast from "./Forecast";

export default function WeatherCard() {
  return (
    <div className="weather-card">
      <div className="row">
        <div className="col-10">
          <TodayInfo />
        </div>
        <div className="col-2">
          <Forecast />
        </div>
      </div>
    </div>
  );
}
