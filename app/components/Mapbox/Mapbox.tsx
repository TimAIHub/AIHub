"use client"

import { useGlobalContext } from "@/app/context/globalContext";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapContainer = dynamic(() => import("react-leaflet").then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then(mod => mod.TileLayer), { ssr: false });

//@ts-ignore
function FlyToActiveCity({ activeCityCoords }) {
    const map = useMapEvents({
        load: () => console.log("map loaded"),
    });
    useEffect(() => {
        if (activeCityCoords) {
            const zoomLev = 13;
            const flyToOptions = {
                duration: 1.5,
            };
            map.flyTo(
                [activeCityCoords.lat, activeCityCoords.lon], 
                zoomLev, 
                flyToOptions
            );
        }
    }, [activeCityCoords, map]);

    return null;
}

const Mapbox = () => {
    const { forecast } = useGlobalContext();
    const [isClient, setIsClient] = useState(false);
  
    useEffect(() => {
      setIsClient(true);
    }, []);
  
    const activeCityCords = forecast?.coord;
  
    if (!forecast || !forecast.coord || !activeCityCords) {
      return (
        <div>
          <h1>Loading</h1>
        </div>
      );
    }
  
    return (
      <div className="flex-1 basis-[50%] border rounded-lg">
        {isClient && (
          <MapContainer
            center={[activeCityCords.lat, activeCityCords.lon]}
            zoom={13}
            scrollWheelZoom={false}
            className="rounded-lg m-4"
            style={{ height: "calc(100% - 2rem)", width: "calc(100% - 2rem)" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
  
            <FlyToActiveCity activeCityCoords={activeCityCords} />
          </MapContainer>
        )}
      </div>
    );
  };

export default Mapbox;