import styles from "./Weather.module.css";
import Image from "next/image";
import Link from "next/link";
import {useState, useEffect} from 'react';

export default function Weather() 
{
        const [location, setLocation] = useState(null);
        const [weatherData, setWeatherData] = useState(null);
        const [currentDate, setCurrentDate] = useState('');

        useEffect(() => {
            const date = new Date();
            const options = { month: 'long', day: 'numeric', year: 'numeric' };
            const formattedDate = date.toLocaleDateString('en-US', options);
            setCurrentDate(formattedDate);
        }, []);

        useEffect(() => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        setLocation({
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude
                        });
                    },
                    (error) => {
                        console.error('Error getting geolocation:', error);
                    }
                );
            } else {
                console.error('Geolocation is not supported by this browser.');
            }
        }, []);
    
        useEffect(() => {
            if (location) {
                fetchWeatherData(location.latitude, location.longitude);
            }
        }, [location]);
    
        const fetchWeatherData = async (latitude, longitude) => {
            try {
                const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
                const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
                const response = await fetch(apiUrl);
                const data = await response.json();
                setWeatherData(data);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        console.log(weatherData);

    return (
        <div className={styles.weather}>
            {weatherData ? (
                <div className={styles.greetingContainer}>
                    <div className={styles.welcomeContainer}>
                        <p>Welcome!</p>
                        <p>{weatherData.name}</p>
                        <p>{currentDate}</p>
                    </div>
                    <div>
                        <div className={styles.weatherIcon}></div>
                        <p>{weatherData.main.temp}°C</p>
                        <p>H: {weatherData.main.temp_max}°C</p>
                        <p>L: {weatherData.main.temp_min}°C</p>
                    </div>
                    
                    {/* <p>Description: {weatherData.weather[0].description}</p> */}
                </div>
            ) : (
                <></>
            )}
        </div>
    );
}