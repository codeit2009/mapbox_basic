navigator.geolocation.getCurrentPosition(successLocation,errorLocation,{enableHighAccuracy:true})
mapboxgl.accessToken ='your_token';

function successLocation(position){
    setupMap([position.coords.longitude, position.coords.latitude],'navigation-night')
}
function errorLocation() {
    setupMap([-2.24, 53.48],'navigation-night')
}
function setupMap(center,mapType){
    if (mapType == 'streets'){
        style='mapbox://styles/mapbox/streets-v11'
    }else if (mapType=='outdoors') {
        style='mapbox://styles/mapbox/outdoors-v11'
    } else if (mapType == 'light'){
        style='mapbox://styles/mapbox/light-v10'
    } else if (mapType=='dark'){
        style='mapbox://styles/mapbox/dark-v10'
    } else if (mapType=='satellite'){
        style='mapbox://styles/mapbox/satellite-v9'
    } else if (mapType=='satellite-streets'){
        style='mapbox://styles/mapbox/satellite-streets-v11'
    }else if (mapType=='navigation-day'){
        style='mapbox://styles/mapbox/navigation-day-v1'
    }else if (mapType=='navigation-night'){
        style='mapbox://styles/mapbox/navigation-night-v1'
    }
    const map = new mapboxgl.Map({
      container: 'map',
      style: style,
      center:center,
      zoom:15
    });
    // Add zoom and rotation controls to the map.
    map.addControl(new mapboxgl.NavigationControl());
    map.addControl(new MapboxDirections({accessToken: mapboxgl.accessToken}),'top-left');
}