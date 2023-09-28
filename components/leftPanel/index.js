import React from "react";
import { FiSearch } from "react-icons/fi";
import styles from "./styles.module.css";
import globalStyles from "../../styles/global.css"
import Image from "next/image";
import AirData from "../airData";
import SearchBox from "../searchBox";

export default function LeftPanel({
  location = {},
  currentWeather = {},
  background,
  children
}) {
  return (
    <div className={`${styles.leftPanel} ${globalStyles.containers}` }>
      <div>
         <SearchBox/>
      <div className={styles.currentWeather}>
        <h2>{`${location.region} / ${location.name}`}</h2>
        <h3 className={styles.degree}>
          {`${currentWeather?.temp_c}°`}{" "}
          <small>{currentWeather?.temp_f + "F"}</small>
        </h3>
        <div className={styles.currentCondition}>
          <p>{currentWeather?.condition?.text || "Güneşli"}</p>
          {currentWeather?.condition?.icon?(<Image
            src={"http:"+currentWeather?.condition?.icon}
            alt={currentWeather?.condition?.text}
            width={60}
            height={60}
          />):""}
        </div>
        <div className={styles.background}>
          <Image src={background} alt="city image"  fill   />

        </div>
      </div>
     

       
      </div>
      <div className={styles.children}><div>{children} </div></div>
    </div>
  );
}
