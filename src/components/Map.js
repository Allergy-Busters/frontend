import React from 'react';
import { useRef, useEffect, useState } from 'react';
import mapboxgl  from 'mapbox-gl';
import '../CSS/Map.css'
 
mapboxgl.accessToken = 'pk.eyJ1IjoibWdob2xkZW4xMyIsImEiOiJjbDBkNDRuZXMwNWR1M2pvODV6aG53Y2tqIn0.gKTYLFrZHrCYcEllOKMJ1A';
 
export default function MapPage() {
    const mapContainer = useRef(null)
        const map = useRef(null)
        const [lng, setLng] = useState(-76.6)
        const [lat, setLat] = useState(39.4)
        const [zoom, setZoom] = useState(9)

    useEffect(() => {
        if (map.current) return;
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mgholden13/cl0n6ncem000w15mth7su8u91',
            center:[lng, lat],
            zoom: zoom
        })
    })

    useEffect(() => {
        if (!map.current) return;
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(5));
            setLat(map.current.getCenter().lat.toFixed(5));
            setZoom(map.current.getZoom().toFixed(2));
        })
    })
    return (
        <div>
            <div className="sidebar">
                Longitude= {lng} : Latitude= {lat} : Zoom= {zoom}
            </div>
            <div ref={mapContainer} className="map-cotainer"/>
            {/* <Marker latitude={[1]} longitude={[0]}>
                <button class="marker-btn">
                    <img src="../public/marker.png" alt="Map Marker"/>
                </button>
            </Marker> */}
        </div>
    )
}
