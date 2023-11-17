import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet';
import GeoCoderMarker from './GeoCoderMarker';


function Map({address,city,country}) {
  return (
    <MapContainer
    
    center={[53.5, 18.8]}
    zoom={1}
    style={{ height: '28vh', width: '55%',marginTop : "10px", marginRight : "3px", zIndex : 0 ,  }}>
        <TileLayer  url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'>

        </TileLayer>

        <GeoCoderMarker   address={`${address} ,${city} ,${country}`} />


    </MapContainer>
  )
}

export default Map;