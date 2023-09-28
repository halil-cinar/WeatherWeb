import Link from 'next/link'
import React from 'react'
import styles from "./styles.module.css"
import {FaList} from "react-icons/fa"
export default function Header(props) {
    

    return (
        <header className={styles.header+" fluid"}>
            <h1 className={styles.logo}>{process.env.APP_NAME}</h1>
            
            <div className={styles.navMenu}>
            <button className={styles.menuButton}><FaList/></button>
            <div>
                <nav>
            <Link href={"/"}>header3</Link>
            <Link href={"/"}>header2</Link>
            <Link href={"/"}>header1</Link>
            <Link href={"/"}>header0</Link>
            </nav>
            </div>
            </div>
        </header>
    )
}
