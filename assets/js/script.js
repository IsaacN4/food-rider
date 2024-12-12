'use strict';


const contactSection = document.querySelector('container flex flex-between');
const orderNow = document.querySelector('image-container');   
mapboxgl.accessToken = 'pk.eyJ1Ijoid2VsbGZjIiwiYSI6ImNscTE5azY3eDAzeGwyaXIycTgyMnM0ZW8ifQ.0Bp9MRAu0DmdRpUI8lnDPg';
const trackLocationButton = document.querySelector('.track-button');
const mapContainer = document.querySelector('.tracking-map');



trackLocationButton.addEventListener('click', () => {
    navigator.geolocation.getCurrentPosition(success, error, accuracy);
});



function success(position) {
    const { latitude, longitude } = position.coords;

    const map = new mapboxgl.Map({
        container: mapContainer, 
        style: 'mapbox://styles/mapbox/standard',
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
        style: 'mapbox://styles/mapbox/standard',
        center: defaultCoords,
        zoom: 12
    });

    new mapboxgl.Marker()
        .setLngLat(defaultCoords)
        .addTo(map);
}


function scrollToContact() {
    if (contactSection) {
        contactSection.scrollIntoView( {
            behavior: 'smooth' });
    }
}

function scrollToImage() {
    if (orderNow) {
        orderNow.scrollIntoView( {
            behavior: 'smooth' });
    }
}
