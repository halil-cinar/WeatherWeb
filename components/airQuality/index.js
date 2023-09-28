import React from 'react'
import styles from "./styles.module.css"
export default function AirQuality({airQuality={}}) {

    return (
        <div className={styles.airQuality}>
            <div className={styles.qualityItem}><label>CO</label><input value={airQuality?.co?.toFixed(2)+" μg/m3"}  disabled></input></div>
            <div className={styles.qualityItem}><label>NO2</label><input value={airQuality?.no2?.toFixed(2)+" μg/m3"}  disabled></input></div>
            <div className={styles.qualityItem}><label>O3</label><input value={airQuality?.o3?.toFixed(2)+" μg/m3"}  disabled></input></div>
            <div className={styles.qualityItem}><label>SO2</label><input value={airQuality?.so2?.toFixed(2)+" μg/m3"}  disabled></input></div>
            <div className={styles.qualityItem}><label>PM2.5</label><input value={airQuality?.pm2_5?.toFixed(2)+" μg/m3"}  disabled></input></div>
            <div className={styles.qualityItem}><label>PM10</label><input value={airQuality?.pm10?.toFixed(2)+" μg/m3"}  disabled></input></div>
            
            <div className={styles.qualityItem}><label>Air Quality {"(DEFRA)"}</label><input type="range" max={7} min="0" value={airQuality["gb-defra-index"]}  disabled></input></div>
            <div className={styles.qualityItem}><label>Air Quality (EPA)</label><input type="range" max={50} min="0" value={airQuality?.["gb-defra-index"]}  disabled></input></div>
            
            
            
        </div>
    )
}
