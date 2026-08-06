import { useState } from 'react'
import {useMapEvents,Marker} from 'react-leaflet'
const LocationMarker = ({setLocation}) => {
    const [position,setPosition]=useState(null)

    useMapEvents({
        click(e){
            const {lat,lng}=e.latlng
            setPosition({lat,lng})
            setLocation({lat,lng})
            console.log(lat,lng)
        }
    })

  return (

    <>
    {position?<Marker position={position}/>:null}
    </>
  )
}

export default LocationMarker