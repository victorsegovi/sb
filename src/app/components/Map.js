"use client";

import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({ center, zoom }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!center || !zoom) {
      return; // Prevent map initialization if props are missing
    }

    mapRef.current = L.map('map', {
      center: center,
      zoom: zoom,
      layers: [
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }),
      ],
    });

    L.marker(center).addTo(mapRef.current);

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, [center, zoom]);

  return <div id="map" style={{ height: '400px', width: '100%' }} className="z-10"></div>;
};

export default Map;