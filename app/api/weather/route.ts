import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest){
    try {
        const apiKey = 'abca229f3b7ee34ad625ca10ff8799ed' //process.env.OPENWEATHERMAP_API_KEY;
        const searchParams = req.nextUrl.searchParams;

        const lat = searchParams.get("lat");
        const lon = searchParams.get("lon");
        
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

        const res = await axios.get(url);
        console.log(`Weather data fetched ${JSON.stringify(res.data)}`);
        return NextResponse.json(res.data);

    } catch (error) {
        console.log('Error fetching forecast data', error);
        return new Response("Error fetching forecast data", { status: 500 });
    }
}

// http://api.openweathermap.org/data/2.5/weather?q=New York&appid=abca229f3b7ee34ad625ca10ff8799ed&units=metric