import React, { useEffect, useState } from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';
import './MapChart.scss';

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const MapChart = () => {
  const [position, setPosition] = useState([0, 0]);

  useEffect(() => {
    // Fetch data from the geoUrl
    fetch(geoUrl)
      .then((response) => response.json())
      .then((data) => {
        // Log the data to the console
        console.log(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // The empty dependency array ensures this effect runs only once

  return (
    <div className="map-container">
      <div className="zoom-buttons">
      </div>
      <ComposableMap projectionConfig={{ scale: 120 }}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                      fill: "#ECEFF1", // Light gray fill
                      outline: "none",
                      cursor: "pointer", // Change cursor to pointer on hover
                    },
                    hover: {
                      fill: "#FFD700", // Yellow fill on hover
                      outline: "none",
                      cursor: "pointer", // Change cursor to pointer on hover
                    },
                    pressed: {
                      fill: "#FF5722", // Orange fill when pressed
                      outline: "none",
                      cursor: "pointer", // Change cursor to pointer when pressed
                    }
                  }}
                />
              ))
            }
          </Geographies>
      </ComposableMap>
    </div>
  );
};

export default MapChart;