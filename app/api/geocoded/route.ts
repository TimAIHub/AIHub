import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const apiKey = "abca229f3b7ee34ad625ca10ff8799ed";//process.env.API_KEY;
        const searchParams = req.nextUrl.searchParams;

        const city = searchParams.get("search");
        const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`;

        const res = await axios.get(url);

        console.log(`Geo data fetched ${res}`);
        console.log(`Geo data fetched ${JSON.stringify(res.data)}`);

        return NextResponse.json(res.data);
    } catch (error) {
        console.log("Error fetching geocoded data");
        return new Response("Error fetching geocoded data", {status: 500});
    }
}