import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";
import {
  FiWind,
  FiArrowUpCircle,
  FiCloud,
  FiCloudRain,
  FiCloudSnow,
  FiSun,

} from "react-icons/fi";
export default function Hour({ hour = {} }) {
  return (
    <div className={styles.hour}>
      <button className={styles.mainContent}>
        <div><h4>{hour.time.split(" ")[0].split("-").slice(1,3).join("-")}</h4>
        <h3>{hour.time.split(" ")[1]}</h3></div>
        {hour?.condition?.icon?(<Image src={"http:"+hour?.condition?.icon} alt={hour?.condition?.text} width={30} height={30} />):""}
        <h2>{hour.temp_c + "°"}</h2>
      </button>
      <div className={styles.otherContent}>
        <div>
<div>
          <label>
            <FiWind className={styles.icon} />
          </label>
          <input value={hour.wind_kph + "km/h"} disabled />
          <FiArrowUpCircle
            className={styles.icon}
            style={{ transform: `rotate(${hour.wind_degree}deg)` }}
          />
        </div>

        <div>
          <label>
            <FiCloud className={styles.icon} />
          </label>
          <input value={hour.cloud + "%"} disabled />
        </div>
        <div>
          <label>
            <FiCloudRain className={styles.icon} />
          </label>
          <input value={hour.will_it_rain + "%"} disabled />
        </div>
        <div>
          <label>
            <FiCloudSnow className={styles.icon} />
          </label>
          <input value={hour.will_it_snow + "%"} disabled />
        </div>
        <div>
        <label>
            <FiSun  className={styles.icon} />
          </label>
          <input value={hour.uv} disabled />
        </div>

        </div>
        
        
      </div>

    </div>
  );
}
