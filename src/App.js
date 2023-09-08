import React from "react";
import WeatherCard from "./WeatherCard";
import Credentials from "./Credentials";
import "./App.css";
import "./WeatherCard.css";

export default function App() {
  return (
    <div className="App">
      <WeatherCard />
      <Credentials />
    </div>
  );
}
