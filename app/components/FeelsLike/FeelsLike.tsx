"use client"

import { useGlobalContext } from '@/app/context/globalContext';
import { thermometer } from '@/app/utils/icons';
import { kelvinToCelsius } from '@/app/utils/misc';
import { Skeleton } from '@/components/ui/skeleton';
import React from'react';

function FeelsLike() {

    const { forecast } = useGlobalContext();

    if (!forecast || !forecast.main || !forecast.main.feels_like) {
        return <Skeleton className='h-[12rem] w-full' />;
    }

    const { feels_like, temp_min, temp_max }  = forecast.main;

    const feelsLikeText = (feelsLike: number, minTemp: number, maxTemp: number) => {
        const avgTemp = (minTemp + maxTemp) / 2;

        if (feelsLike < avgTemp - 5) {
            return "Feels signficantly colder than actual temperature.";
        } 
        if (feelsLike  > avgTemp -5 && feelsLike <= avgTemp + 5) {
            return "Feels close to the actual temperature.";
        } 
        if  (feelsLike  > avgTemp + 5) {
            return `Feels sinificantly warmer than actual temperature.`;
        }

        return "Temperature feeling is typical for this range.";

    }

    const feelsLikeTextDescription = feelsLikeText(feels_like, temp_min, temp_max);
    return (
        <div className="pt-6 px-4 pb-5 h-[12rem] border rounded-lg flex flex-col gap-8 dark:bg-dark-grey shadow-sm drak:shadow-none">
            <div className="top">
                <h2 className="flex items-center gap-2 font-medium">
                    {thermometer} Feels Like
                </h2>
                <p className="pt-4 text-2xl">
                    {kelvinToCelsius(feels_like)}°C
                </p>
            </div>
            <p className='text-sm'>
                {feelsLikeTextDescription}
            </p>
        </div>
    );
}

export default FeelsLike;