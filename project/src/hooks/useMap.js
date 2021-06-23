import {useEffect, useState} from 'react';
import leaflet from 'leaflet';

function useMap(mapRef, firstOffer) {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: firstOffer.location.latitude,
          lng: firstOffer.location.longitude,
        },
        zoom: firstOffer.location.zoom,
      });

      leaflet
        .tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'})
        .addTo(instance);

      setMap(instance);
    }

    return () => {
      mapRef = null;
    };
  }, [mapRef, map, firstOffer]);

  return map;
}

export default useMap;
