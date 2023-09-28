import React from 'react'
import Day from '../day'
import styles from "./styles.module.css"
export default function DailyWeather({dailyWeather=[]}) {


    return (
        <div className={styles.dailyWeather}>
            <div className={styles.dayList}>
                {
                    dailyWeather.map(item=>{
                        return (<Day key={item.date} weather={item}/>)
                    })
                }
            </div>
        </div>
    )
}
