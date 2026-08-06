import { MapContainer, Marker, TileLayer } from "react-leaflet";
import LocationMarker from "./LocationMarker.jsx";
import { useEffect, useState } from "react";

const Map = () => {
    const [location,setLocation]=useState("")
    const [place,setPlace]=useState("")


    useEffect(()=>{
        const {lat,lng}=location

        // https://nominatim.openstreetmap.org/reverse?format=json&lat=LAT&lon=LNG


        const fetchPlace=async () => {

            const res=await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`)
            const data=await res.json()
            setPlace(data.address.city)
            
        }

        fetchPlace()

    },[location])

  return (
    <>
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true} style={{height:"400px",width:"100%"}}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
            <LocationMarker setLocation={setLocation}/>
      </MapContainer>

      {place?place:"hello"}
    </>
  );
};

export default Map;
