import React, { useState, useEffect } from "react";
import axios from "axios";
import GEOJSON_DATA from "../../../geojson.json";
import "./countryMap.scss";

function RegionCountryMap({ data }) {
  const [tooltipContent, setTooltipContent] = useState("");
  const [mapComponents, setMapComponents] = useState(null);

  useEffect(() => {
    const importMapComponents = async () => {
      const { ComposableMap, Geographies, Geography, ZoomableGroup } =
        await import("react-simple-maps");

      setMapComponents({
        ComposableMap,
        Geographies,
        Geography,
        ZoomableGroup,
      });
    };

    importMapComponents();
  }, []);

  const filteredData = data.filter(
    (item) => item.country !== "" && item.intensity !== null
  );

  if (!mapComponents) {
    return null; // Return loading state or handle it appropriately
  }

  const { ComposableMap, Geographies, Geography, ZoomableGroup } =
    mapComponents;

  return (
    <div className="countryMap">
      <div className="map">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 200,
          }}
        >
          <ZoomableGroup>
            <Geographies geography={GEOJSON_DATA}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const d = filteredData.find(
                    (item) => item.country === geo.properties.name
                  );

                  return (
                    <React.Fragment key={geo.rsmKey}>
                      <Geography
                        geography={geo}
                        fill={
                          d ? getColorBasedOnIntensity(d.intensity) : "#F5F4F6"
                        }
                        onMouseEnter={() => {
                          const tooltipHtml = d ? (
                            <div className="tooltipContent">
                              <p>
                                {" "}
                                <span>Insight:</span> {d.insight}
                              </p>
                              <p>
                                {" "}
                                <span>Country:</span> {d.country}
                              </p>
                              <p>
                                {" "}
                                <span>Intensity:</span> {d.intensity}
                              </p>
                            </div>
                          ) : (
                            "No data available"
                          );
                          setTooltipContent(tooltipHtml);
                        }}
                        onMouseLeave={() => setTooltipContent("")}
                        style={{
                          hover: {
                            fill: "#6781b4",
                            outline: "none",
                          },
                        }}
                      />
                    </React.Fragment>
                  );
                })
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>
      <div className="mapInfo">
        <h2 style={{ marginBottom: "1rem" }}>
          Intensities of Insights over Countries
        </h2>
        <h3>Hover Map for Info</h3>
        {tooltipContent}
      </div>
    </div>
  );
}

const getColorBasedOnIntensity = (intensity) => {
  if (intensity > 0 && intensity < 10) return "#FFFF00";
  if (intensity > 10 && intensity < 20) return "#FFA500";
  if (intensity > 20 && intensity < 30) return "#FF0000";
  return "#F5F4F6";
};

export default RegionCountryMap;
