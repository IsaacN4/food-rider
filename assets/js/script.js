'use strict';

mapboxgl.accessToken = 'pk.eyJ1IjoiYmFjaGFyYWxoYW1hZGEiLCJhIjoiY2xxNmNjYWRjMDc0ejJpbno3cmNyZWN2ZSJ9.SJcOC6oDZhFYpJP5iKvq9A';

const mapContainer = document.querySelector('.tracking-map');

navigator.geolocation.getCurrentPosition(success, error);

function success(position) {
    const { latitude, longitude } = position.coords;

    const map = new mapboxgl.Map({
        container: mapContainer, 
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [longitude, latitude], 
        zoom: 12 
    });

    new mapboxgl.Marker()
        .setLngLat([longitude, latitude])
        .addTo(map);
}

function error() {
    console.error('Unable to retrieve location. Using default location.');

    const defaultCoords = [-98.4936, 29.4241];

    const map = new mapboxgl.Map({
        container: mapContainer, 
        style: 'mapbox://styles/mapbox/streets-v12',
        center: defaultCoords,
        zoom: 12
    });

    new mapboxgl.Marker()
        .setLngLat(defaultCoords)
        .addTo(map);
}
