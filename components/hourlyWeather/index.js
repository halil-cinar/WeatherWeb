import React from 'react'
import Hour from '../hour'
import styles from "./styles.module.css"

export default function HourlyWeather({hourlyWeather=[]}) {
    

    return (
        <div className={styles.hourlyWeather}>
            <div className={styles.hourList}>
                {
                    hourlyWeather?.map(item=>(
                        <Hour hour={item}/>
                    ))
                }
            </div>
        </div>
    )
}
