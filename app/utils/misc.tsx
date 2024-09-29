import { Description } from "@radix-ui/react-dialog";
import moment from "moment";

export const kelvinToCelsius = (kelvin: number): number => {
    return Math.round((kelvin - 273.15));
};

export const unixToTime = (unixTime: number, timezone: number) => {
    return moment.unix(unixTime).utcOffset(timezone / 60).format('HH:mm');
}

export const unixToDay = (unixTime: number) => {
    return moment.unix(unixTime).format('ddd');
}

export const formatNumber = (num: number) => {
    if (num >= 1000000) {
        return `${(num / 1000000).toFixed(2)}M`
    } else if (num >= 1000) {
        return `${(num / 1000).toFixed(2)}K`
    } else {
        return num.toString();
    }
}

export const airQualityIndexText = [
    {
        rating: 20,
        description: 'Good'
    }, 
    {
        rating: 40,
        description: 'fair'
    }, 
    {
        rating: 60,
        description: 'moderate'
    }, 
    {
        rating: 80,
        description: 'poor'
    },
    {
        rating: 100,
        description: 'very poor'
    },
    {
        rating: 1000,
        description: 'extreme'
    }
];