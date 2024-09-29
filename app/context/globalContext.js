"use client"

import axios from "axios"
import React, { useContext, createContext, useState, useEffect, use } from "react"
import defaultStates from "../utils/defaultStates"

import { debounce } from "lodash"

const GlobalContext = createContext()
const GlobalContextUpdate = createContext()

export const GlobalContextProvider = ({ children }) => {

    const [forecast, setForecast] = useState({});
    const [geoCodedList, setGeoCodedList] = useState(defaultStates);
    const [inputValue, setInputValue] = useState("");

    const [activeCityCoords, setActiveCityCoords] = useState([
        51.752021, -1.257726,
    ]);

    const [airQuality, setAirQuality] = useState({});
    const [fiveDayForecast, setFiveDayForecast] = useState({});
    const [uvIndex, setUvIndex] = useState({});

    const festForecast = async (lat, lon) => {
        try {
            const res = await axios.get(`api/weather?lat=${lat}&lon=${lon}`)
            console.log("forecast res:", res.data);
            setForecast(res.data);
        } catch (error) {
            console.log("Error fetching forecast data:", error.message);
        }
    };

    const fetchAirQuality = async (lat, lon) => {
        try  {
            const res  = await axios.get(`api/pollution?lat=${lat}&lon=${lon}`)
            console.log("air quality res:", res.data);
            setAirQuality(res.data);
        } catch (error) {
            console.log("Error fetching air quality data:", error.message);
        }
    }

    //fetch five day forecast
    const fetchFiveDayForecast = async (lat, lon) => {
        try {
            const res = await axios.get(`api/fiveday?lat=${lat}&lon=${lon}`)
            console.log("five day forecast data:", res.data);
            setFiveDayForecast(res.data);
        } catch (error) {
            console.log("Error fetching five day forecast data:", error.message);
        }
    };

    const fetchGeoCodedList = async (search) => {
        try {
            const res = await axios.get(`/api/geocoded?search=${search}`)
            console.log("Geocoded list res:", res.data);
            setGeoCodedList(res.data);
        } catch (error)  {
            console.log("Error fetching geocoded list data:", error.message);
        }
    };

    // fetch uv index
    const fetchUvIndex = async (lat, lon) => {
        try {
            const res = await axios.get(`api/uv?lat=${lat}&lon=${lon}`)
            setUvIndex(res.data);
        } catch (error) {
            console.log("Error fetching uv index data:", error.message);
        }
    };

    const handleInput = (e) => {
        console.log("liumiao clear codedlist:", e.target.value);
        setInputValue(e.target.value);

        if (e.target.value === "") {
            console.log("liumiao clear codedlist:", defaultStates);
            setGeoCodedList(defaultStates);
        }
    };

    useEffect(() => {
        console.log("liumiao == Active city coords inputValue:", inputValue);
        const debounceFetch = debounce((search) => {
            fetchGeoCodedList(search);
        }, 500);
        if (inputValue) {
            debounceFetch(inputValue);
        }

        return () => debounceFetch.cancel();
    }, [inputValue]);

    useEffect(() => {
        console.log("liumiao == Active city coords:", activeCityCoords);
        festForecast(activeCityCoords[0], activeCityCoords[1]);
        fetchAirQuality(activeCityCoords[0], activeCityCoords[1]);
        fetchFiveDayForecast(activeCityCoords[0], activeCityCoords[1]);
        fetchUvIndex(activeCityCoords[0], activeCityCoords[1]);
    }, [activeCityCoords]);

    return (
         <GlobalContext.Provider 
            value={{
                forecast,
                airQuality,
                fiveDayForecast,
                uvIndex,
                geoCodedList,
                inputValue,
                handleInput,
                setActiveCityCoords
            }}>
            <GlobalContextUpdate.Provider value={{setActiveCityCoords}}> 
                {children}
            </GlobalContextUpdate.Provider>
         </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => useContext(GlobalContext);
export const useGlobalContextUpdate = () => useContext(GlobalContextUpdate);

