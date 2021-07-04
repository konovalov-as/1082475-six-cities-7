import {useEffect, useState} from 'react';
import leaflet from 'leaflet';

function useMap(mapRef, defaultCity) {
  const [map, setMap] = useState(null);
  const [currentCity] = useState(defaultCity);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: currentCity.location.latitude,
          lng: currentCity.location.longitude,
        },
        zoom: currentCity.location.zoom,
      });

      leaflet
        .tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'})
        .addTo(instance);

      setMap(instance);
    }

    return () => {
      mapRef = null;
    };
  }, [mapRef, map, currentCity]);

  return map;
}

export default useMap;
