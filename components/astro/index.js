import Image from 'next/image'
import React from 'react'
import sun from "../../images/sun.png"
import styles from "./styles.module.css"
export default function Astro({astro={}}) {
    

    return (
        <div className={styles.astro}>
               
                <div className={""}>
                <div className={styles.astroItem}><label>sunrise</label><input value={astro.sunrise}  disabled></input></div>
                <div className={styles.astroItem}><label>sunset</label><input value={astro.sunset}  disabled></input></div>
                <div className={styles.astroItem}><label>moonrise</label><input value={astro.moonrise}  disabled></input></div>
                <div className={styles.astroItem}><label>moonset</label><input value={astro.moonset}  disabled></input></div>
                
                </div>
                


            
            
        </div>
    )
}
