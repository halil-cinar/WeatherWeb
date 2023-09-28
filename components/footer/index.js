import Link from 'next/link'
import React from 'react'

import styles from "./styles.module.css"

export default function Footer(props) {
    

    return (
        <div>
            <footer className={styles.footer}>
                <div>
                    {"Made with by "}
                    <Link href="https://www.google.com" >Halil Çınar</Link>
                </div>
            </footer>
        </div>
    )
}
