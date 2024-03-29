import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/HomePage.module.css";
import { useState, useEffect } from 'react';
import CalendarCard from "@/components/CalendarCard";
import TopBar from "@/components/TopBar";
import SettingIcon from "@/components/SettingIcon";
import LinkButton from "@/components/LinkButton";
import FavouriteButton from "@/components/FavouriteButton";

export default function HomePage() {

    const [loaded, setLoaded] = useState(false);

    const showHome = loaded => loaded == true ? {display: 'none'} : {display: 'flex'};

    useEffect(() => {
        setTimeout(()=>{
        setLoaded(true)
        }, 3000)
        console.log(loaded);
    });

    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        const date = new Date();
        const options = { month: 'long', day: 'numeric', year: 'numeric' };
        const formattedDate = date.toLocaleDateString('en-US', options);
        setCurrentDate(formattedDate);
    }, []);

  return (
    <>
      <Head>
        <title>Tranquify App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <div 
            className={styles.loading}
            style={showHome(loaded)}
        >
            <div className={styles.logo}></div>
                <h1 className={styles.text}>Loading</h1>
                <div className={styles.dotContainer}>
                    <div className={styles.dot}></div>
                    <div className={styles.dot}></div>
                    <div className={styles.dot}></div>
                </div>
        </div>

        <div className={styles.topBar}>
            <SettingIcon />
        </div>
        <div className={styles.content}>
            <div className={styles.greetingsContainer}>
                <div className={styles.welcomeContainer}>
                    <h1>Welcome!</h1>
                    <div>
                        <p>location</p>
                        <p>{currentDate}</p>
                    </div>
                </div>
                
            </div>
            <div className={styles.calendar}>
                <CalendarCard i="4"/>
                <CalendarCard i="3"/>
                <CalendarCard i="2"/>
                <CalendarCard i="1"/>
                <CalendarCard i="0"/>
            </div>
            <hr className={styles.divideLine}/>
            <div className={styles.meditationContainer}>
                <div className={styles.meditation}>
                    <h2>Meditation for you</h2>
                    <LinkButton link="" linkText="View more"/> 
                </div>
                <div className={styles.meditationCards}>
                    <div className={styles.card}>
                        <div className={styles.graphic}></div>
                        <p>Meditation</p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.graphic}></div>
                        <p>Meditation</p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.graphic}></div>
                        <p>Meditation</p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.graphic}></div>
                        <p>Meditation</p>
                    </div>
                </div>
            </div>
            <div className={styles.favourites}>
                <FavouriteButton link=""/>
            </div>
        </div>
      </main>
    </>
  );
}
