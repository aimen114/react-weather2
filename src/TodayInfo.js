import React from "react";
import "./TodayInfo.css";

export default function TodayInfo() {
  let weather = {
    cityName: "Vancouver",
    tempOfTheDay: "12",
    date: "Friday 10:02",
    desc: "Cloudy",
    humidity: "68",
    wind: "3.09",
  };
  return (
    <div className="TodayInfo">
      <h1>
        <span>{weather.cityName}</span>
        <span>
          <i
            onclick="toggleSearchBarVisibility()"
            className="fa-solid fa-caret-down searchIcon"
          ></i>
        </span>
        <span>
          <i className="fa-solid fa-location-dot locater" id="locater"></i>
        </span>
        <br />
        <div id="input-group">
          <form className="searchForm" id="searchForm">
            <input
              type="text"
              class="form-control searchInput"
              placeholder="Search city"
              aria-describedby="button-addon2"
              id="cityInput"
              autocomplete="off"
            />
            <button
              className="btn btn-outline-secondary searchButton"
              type="submit"
              id="button-addon2"
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
      </h1>
      <img
        src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
        id="nowIcon"
      />
      <span className="tempOfTheDay">{weather.tempOfTheDay}</span>
      <span className="tempUnits">
        <span className="c-f-btn" class="active">
          ℃{" "}
        </span>
      </span>
      <br />
      <span>Last updated, </span>
      <span> {weather.date}</span>
      <br />
      <span> {weather.desc},</span>
      <i className="fa-solid fa-droplet"></i>
      <span>{weather.humidity}</span>%
      <i className="fa-sharp fa-solid fa-wind"> </i>
      <span>{weather.wind}</span>km/h
    </div>
  );
}
