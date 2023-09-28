import Image from 'next/image'
import React from 'react'
import styles from "./styles.module.css"
export default function Day({weather}) {
    

    return (
        <div className={styles.day}>
            <h4>{weather.date}</h4>
            {weather?.day?.condition?.icon?(<Image src={"http:"+weather?.day?.condition?.icon} alt={weather?.day?.condition?.text} width={40} height={40}/>):""}

                    <h3>{"↑:"}{weather?.day?.maxtemp_c+"°"}</h3>
                    <h3>{"↓:"}{weather?.day?.mintemp_c+"°"}</h3>
          
        </div>
    )
}
