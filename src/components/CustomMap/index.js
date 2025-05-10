import React, { useState } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import sriLankaMap from "../../assets/map/lk.json";

const CustomMap = ({ cities }) => {
  // Array of cities with coordinates and the number you want to display
  const cityList = cities.map(item => {
    const city = item.city;
    return {
      name: city.name,
      coordinates: [city.longitude, city.latitude],
      order: item.order
    };
  });
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        minHeight: "600px",
      }}
    >
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 8000,
          center: [80.7718, 7.8731], // Center of Sri Lanka
        }}
        style={{
          width: "100%",
          backgroundColor: "#98d6ee",
          borderRadius: 5,
        }}
      >
        {/* Render the Sri Lanka GeoJSON map */}
        <Geographies geography={sriLankaMap}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: {
                    fill: "#D6D6DA",
                    outline: "none",
                    stroke: "#000", // Outline color (black)
                    strokeWidth: 0.5, // Thickness of the outline
                  },
                  hover: {
                    fill: "#D6D6DA",
                    outline: "none",
                    stroke: "#000", // Maintain outline on hover
                    strokeWidth: 0.5,
                  },
                  pressed: {
                    fill: "#E42",
                    outline: "none",
                    stroke: "#000",
                    strokeWidth: 0.5,
                  },
                }}
              />
            ))
          }
        </Geographies>

        {/* Add markers for cities */}
        {cityList.map(({ name, coordinates, order }) => (
          <Marker key={name} coordinates={coordinates}>
            <circle r={15} fill="#000" strokeWidth={2} />
            <text textAnchor="middle" y={4} style={{ fontFamily: "system-ui", fill: "#fff", fontSize: 15 }}>
              {order}
            </text>
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
};

export default CustomMap;
