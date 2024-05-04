import styles from './MeditationCardHome.module.css'
import { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";

export default function MeditationCardHome({
    link, title
}) {
    return(
        <div className={styles.cardContainer}>
            <Link href="" style={{textDecoration: 'none', color: 'black'}}>
                <div className={styles.card}>
                    <div className={styles.graphicContainer}>
                        <Image src={link} width="134" height="127" className={styles.graphic}/>
                    </div>
                    <p>{title}</p>
                </div>
            </Link>
        </div>
    )
}