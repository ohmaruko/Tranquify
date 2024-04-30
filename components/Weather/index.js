import styles from "./Weather.module.css";
import Image from "next/image";
import Link from "next/link";
import {useState, useEffect} from 'react';

export default function Weather() 
{
        const [location, setLocation] = useState(null);
        const [weatherData, setWeatherData] = useState(null);
        const [currentDate, setCurrentDate] = useState('');
        const [loading, setLoading] = useState(true);
        const [icon, setIcon] = useState(null); 

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
                setLoading(false);
            } catch (error) {
                console.error('Error fetching weather data:', error);
                setLoading(false);
            }
        };

        console.log(weatherData);

        useEffect(() => {
            if(weatherData) {
                const weatherIcon = {
                    "Clear": '/images/weather/sun.svg',
                    "Clouds": '/images/weather/cloud.svg',
                    "Rain": '/images/weather/rain.svg',
                    "Drizzle": '/images/weather/rain.svg',
                    "Thunderstorm": '/images/weather/thunder.svg',
                    "Snow": '/images/weather/snow.svg',
                    "Mist": '/images/weather/mist.svg',
                    "Smoke": '/images/weather/mist.svg',
                    "Haze": '/images/weather/mist.svg',
                    "Dust": '/images/weather/mist.svg',
                    "Fog": '/images/weather/mist.svg',
                    "Sand": '/images/weather/mist.svg',
                    "Dust": '/images/weather/mist.svg',
                    "Ash": '/images/weather/mist.svg',
                    "Squall": '/images/weather/mist.svg',
                    "Tornado": '/images/weather/mist.svg',
                };
            
                const weatherDescription = weatherData.weather[0].main;
                
                if (weatherIcon.hasOwnProperty(weatherDescription)) {
                    setIcon(weatherIcon[weatherDescription]);
                } else {
                    setIcon(null); 
                }
    
                setLoading(false);
            }
        }, [weatherData])

        console.log('Current icon:', icon);


    return (
        <div className={styles.weather}>
            {loading ? (
                <p>Loading...</p>
            ) : weatherData ? (
                <div className={styles.greetingContainer}>
                    <div className={styles.welcomeContainer}>
                        <p className={styles.welcome}>Welcome!</p>
                        <p className={styles.location}>{weatherData.name}, {weatherData.sys.country}</p>
                        <p className={styles.date}>{currentDate}</p>
                    </div>
                    <div className={styles.weatherContainer}>
                        {icon && (
                            <div className={styles.weatherIcon}>
                                <Image 
                                    src={icon}
                                    alt="weather icon"
                                    width={50}
                                    height={50}
                                    className={styles.weatherIcon}
                                />
                            </div>
                        )}
                        <div className={styles.temperatureContainer}>
                            <p className={styles.temperature}>{weatherData.main.temp}°C</p>
                            <p className={styles.high}>H: {weatherData.main.temp_max}°C</p>
                            <p className={styles.low}>L: {weatherData.main.temp_min}°C</p>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Allow location access to get weather data of your current location.</p>
            )}
        </div>
    );
}