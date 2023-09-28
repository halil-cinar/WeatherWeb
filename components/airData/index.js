import React from 'react'
import AirQuality from '../airQuality'
import Astro from '../astro'
import styles from "./styles.module.css"


export default function AirData({airQuality={},astro={}}) {

    return (
        <div className={styles.airData}>
            <div>
                <AirQuality airQuality={airQuality}/>
                <Astro astro={astro}/>
                
                
            </div>
        </div>
    )
}
