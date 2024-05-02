import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/HomePage.module.css";
import { useState, useEffect, useRef } from 'react';
import CalendarCard from "@/components/CalendarCard";
import TopBar from "@/components/TopBar";
import SettingIcon from "@/components/SettingIcon";
import LinkButton from "@/components/LinkButton";
import FavouriteButton from "@/components/FavouriteButton";
import Weather from "@/components/Weather";
import Navigation from "@/components/Navigation";
import MeditationCardHome from "@/components/MeditationCardHome";
import { meditationData } from '@/data/meditation';
import lottie from "lottie-web";

export default function HomePage() {

    const [loaded, setLoaded] = useState(false);
    
    const [currentDate, setCurrentDate] = useState('');
    
    const showHome = loaded => loaded == true ? {display: 'none'} : {display: 'flex'};
    
    const data = meditationData.meditations;

    const loading = useRef(null);
    

    useEffect(() => {
        setTimeout(()=>{
        setLoaded(true)
        }, 4000)
        console.log(loaded);
    }, []);

    useEffect(() => {
        const date = new Date();
        const options = { month: 'long', day: 'numeric', year: 'numeric' };
        const formattedDate = date.toLocaleDateString('en-US', options);
        setCurrentDate(formattedDate);
    }, []);

    useEffect(() => {
        const anim = lottie.loadAnimation({
            container: loading.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: "/animations/loading.json"
        });

        return () => {
            anim.destroy();
        };
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
            <div className={styles.logo}>
                <div ref={loading} />
            </div>
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
                <Weather/>
                
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
                    <MeditationCardHome link="/images/thumbnails/1.png" title="Meditation"/>
                    <MeditationCardHome link="/images/thumbnails/2.png" title="Meditation"/>
                    <MeditationCardHome link="/images/thumbnails/3.png" title="Meditation"/>
                    <MeditationCardHome link="/images/thumbnails/4.png" title="Meditation"/>
                </div>
            </div>
            <div className={styles.favourites}>
                <FavouriteButton link=""/>
            </div>

            <div className={styles.navigation}>
                <Navigation/>
            </div>
        </div>
      </main>
    </>
  );
}
