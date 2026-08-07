import { MapContainer, Marker, TileLayer } from "react-leaflet";
import LocationMarker from "./LocationMarker.jsx";
import { useEffect, useState } from "react";

const Map = () => {
  const [location, setLocation] = useState("");
  const [place, setPlace] = useState("");
  const [whether, setWhether] = useState({});

  useEffect(() => {
    const { lat, lng } = location;

    // https://nominatim.openstreetmap.org/reverse?format=json&lat=LAT&lon=LNG

    const fetchPlace = async () => {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`,
      );
      const data = await res.json();
      setPlace(data.address.city);
    };

    fetchPlace();
  }, [location]);

  useEffect(() => {

    const {lat,lng}=location
    const getWhether = async() => {
     const res=await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`);
     const data=await res.json()

     console.log(data.current)
     setWhether(data.current)
    };
    getWhether()
  }, [location,radius]);

  return (
    <>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker setLocation={setLocation} />
      </MapContainer>

      {place ? place : "hello"}
      {whether ? whether.temperature_2m : "hello"}
    </>
  );
};

export default Map;
