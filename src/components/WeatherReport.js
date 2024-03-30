import React from "react";
import Sunrise from "../assets/sunrise.png";
import Sunset from "../assets/sunset.png";
import { isEmpty } from "../common";
import "./style.css";

const WeatherReport = ({ data }) => {
    console.log("Weather data ", data);
    const conditionImageStr = data?.currentConditions?.conditions.includes("Rain") ? "Rain" : data?.currentConditions?.conditions;
    const ConditionImage = require(`../assets/${conditionImageStr}.png`);
    const sunriseTime = data?.days?.[0]?.sunrise.toString();
    const sunsetTime = data?.days?.[0]?.sunset.toString();

    return (
        <div className="weatherReportContainer">
            <div className="weatherReportHeader">
                <div className="weatherCondition">
                    {data?.currentConditions?.conditions}
                    <img src={ConditionImage} alt="conditions" />
                    <div className="weathersummary">
                        Today, &nbsp;{parseInt(data?.days?.[0]?.tempmin)}°&nbsp;/&nbsp;{parseInt(data?.days?.[0]?.tempmax)}°
                    </div>
                </div>
                <div className="weatherTemperature">
                    <div>
                        Current Temperature
                    </div>
                    <div className="weatherCondition">
                        {data?.currentConditions?.temp}° C
                    </div>
                    <div className="weatherCondition fahrenheit">
                        {((parseFloat(data?.currentConditions?.temp) * 9/5) +32).toFixed(1)}° F
                    </div>
                    <div className="weatherConditionNotes">
                        Feels like&nbsp;{data?.currentConditions?.temp}° C
                    </div>
                </div>
            </div>
            <hr />
            <div className="presentConditionsHeading">
                Present Conditions
            </div>
            <hr />
            <div className="presentConditions">
                <label>
                    Wind
                </label>
                <div className="data">
                    {data?.currentConditions?.windspeed} mph
                </div>
                <label>
                    Humidity
                </label>
                <div className="data">
                    {data?.currentConditions?.humidity} %
                </div>
                <label>
                    Rain
                </label>
                <div className="data">
                    {isEmpty(data?.currentConditions?.precip) ? 0 : data?.currentConditions?.precip} mm
                </div>
                <label>
                    UV Index
                </label>
                <div className="data">
                    {data?.currentConditions?.uvindex},&nbsp;
                    {data?.currentConditions?.uvindex < 3 
                        ? "Low"
                        : data?.currentConditions?.uvindex >= 3 && data?.currentConditions?.uvindex < 6
                        ? "Medium"
                        : data?.currentConditions?.uvindex >= 6 && data?.currentConditions?.uvindex < 8
                        ? "High"
                        : data?.currentConditions?.uvindex >= 8 && data?.currentConditions?.uvindex <= 10
                        ? "Very High"
                        : "Extremely High"
                    }
                </div>
                <label>
                    Visibility
                </label>
                <div className="data">
                    {data?.currentConditions?.visibility} miles
                </div>
                <label>
                    Air Pressure
                </label>
                <div className="data">
                    {data?.currentConditions?.pressure} hPa
                </div>
            </div>
            <hr />
            <div className="sunInfo">
                <div>
                    <img src={Sunrise} alt="sunrise" />
                    Sunrise at {sunriseTime.substring(0, 5)}
                </div>
                <div>
                    Sunset at {sunsetTime.substring(0, 5)}
                    <img src={Sunset} alt="sunrise" />
                </div>
            </div>
        </div>
    )
};

export default WeatherReport;