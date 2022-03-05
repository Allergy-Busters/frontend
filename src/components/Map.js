import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';


mapboxgl.accessToken = 'pk.eyJ1IjoibWdob2xkZW4xMyIsImEiOiJjbDBkNDRuZXMwNWR1M2pvODV6aG53Y2tqIn0.gKTYLFrZHrCYcEllOKMJ1A'
const map = new mapboxgl.Map({
    container: 'map', //container ID
    style:'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-76.6, 39.4], //starting position [lng, lat]
    zoom: 9 // zoom in starting point
});