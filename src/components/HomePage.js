import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { isEmpty } from "../common";
import Layout from "../elements/Layout";
import { WEATHER_API_KEY, baseURL } from "../constants";
import Button from "../elements/Button";
import WeatherReport from "./WeatherReport";
import "./style.css";

const HomePage = ({ setShowToast, existingUser, isLoggedIn, setIsLoggedIn }) => {
    const history = useNavigate();

    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        if(isEmpty(existingUser) || !isLoggedIn) {
            history("/");
        }
    }, []);

    useEffect(() => {
        if(!isLoggedIn) {
            history("/");
        }
    }, [isLoggedIn]);

    const getWeatherReportToday = async () => {
        if(isEmpty(city)) {
            setShowToast("Please enter the city!");
        } else {
            try {
                const response = await axios.get(`${baseURL}/${city}?unitGroup=metric&key=${WEATHER_API_KEY}`);
                setWeatherData(response?.data);
            } catch(err) {
                setShowToast(err?.response?.data?.split(":")?.[1])
            }
        }
    };

    return (
        <Layout heading="Check Your Weather" existingUser={existingUser} setIsLoggedIn={setIsLoggedIn}>
            <div className="weatherForm">
                <input 
                    className="weatherInputField" 
                    placeholder="Enter the city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <div className="weatherBtn">
                    <Button
                        text="Weather Today"
                        handleClick={() => getWeatherReportToday()}
                        type="primary"
                        fullWidth={true}
                    />
                </div>
            </div>
            {!isEmpty(weatherData)
                ? (
                    <WeatherReport
                        data={weatherData}
                    />
                )
                : null
            }
        </Layout>
    );
};

export default HomePage;