// components/Map.js
import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS

const Map = ({ center, zoom }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Initialize the map
    mapRef.current = L.map('map', {
      center: center,
      zoom: zoom,
      layers: [
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }),
      ],
    });

    // Add a marker (optional)
    L.marker(center).addTo(mapRef.current);

    return () => {
      // Clean up the map instance when the component unmounts
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, [center, zoom]);

  return <div id="map" style={{ height: '400px', width: '100%' }}></div>;
};

export default Map;