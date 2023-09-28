import React from "react";
import styles from "./styles.module.css";
import HourlyWeather from "../hourlyWeather";
import DailyWeather from "../dailyWeather";
import AirQuality from "../airQuality";
import Astro from "../astro";
import AirData from "../airData";
export default function RightPanel({ forecastWeather = {},airQuality={} }) {
  return (
    <div className={styles.rightPanel}>
        <div>
            <HourlyWeather
        hourlyWeather={forecastWeather.forecastday
          .map((item) => [
            ...item.hour,
          ])
          .reduce((acc, cur) => {
            return [...acc, ...cur];
          })}
      />

      <DailyWeather 
      dailyWeather={forecastWeather.forecastday}
      />

      <AirData 
      airQuality={airQuality} 
      astro={forecastWeather.forecastday[0].astro}      
      />
        </div>
      
    </div>
  );
}
