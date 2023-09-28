import LeftPanel from "@/components/leftPanel";
import Link from "next/link";
import React from "react";
import cityBackground from "../../images/city.jpg";
import styles from "./styles.module.css";
import Image from "next/image";
import RightPanel from "@/components/rightPanel";
import HourlyWeather from "@/components/hourlyWeather";
import DailyWeather from "@/components/dailyWeather";
import AirData from "@/components/airData";
export default function HomeContainer({
  location = {},
  current = {},
  forecast={},
  leftPanelBackground,
  background,
}) {
  return (
    <div className={styles.homePage}>
      <LeftPanel
        location={location}
        currentWeather={current}
        background={leftPanelBackground}
      >
        <HourlyWeather hourlyWeather={forecast?.forecastday
          .map((item) => [
            ...item.hour,
          ])
          .reduce((acc, cur) => {
            return [...acc, ...cur];
          })}/>
        <DailyWeather dailyWeather={forecast.forecastday}/>
        <AirData 
          airQuality={current.air_quality}
          astro={forecast.forecastday[0].astro}
          />
      </LeftPanel>

      <RightPanel
        forecastWeather={forecast}
        airQuality={current.air_quality}
      />
      <div className={styles.background}>
        <Image src={background} alt={"weather App page background"} fill />
      </div>
    </div>
  );
}
