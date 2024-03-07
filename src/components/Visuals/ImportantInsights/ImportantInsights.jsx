import React, { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
} from "recharts";
import "./overallInsights.scss";

function renderCustomTooltip(props, data) {
  const { active, payload } = props;

  if (active && payload && payload.length) {
    const relevance = payload[0].payload.relevance;
    const intensity = payload[0].payload.intensity;
    const likelihood = payload[0].payload.likelihood;
    const insight = payload[0].payload.insight;
    const start_year = payload[0].payload.start_year;
    const end_year = payload[0].payload.end_year;

    return (
      <div className="custom-tooltip">
        <p>{`intensity: ${intensity}`}</p>
        <p>{`likelihood: ${likelihood}`}</p>
        <p>{`relevance: ${relevance}`}</p>
        <p>
          from year:{start_year || "Not Specified"} to year:
          {end_year || "Not Specified"}
        </p>
        <p>{`Insight: ${insight}`}</p>
      </div>
    );
  }

  return null;
}

function ImportantInsights({ data }) {
  const [filteredData, setFilteredData] = useState(data);
  const [screenWidth, setScreebWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setScreebWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (data.length < 400) {
      const filteredData = data.filter(
        (item) =>
          item.relevance !== null &&
          item.likelihood !== null &&
          item.intensity !== null
      );
      setFilteredData(filteredData);
    } else if (screenWidth <= 576) {
      const filteredData = data.filter((item) => {
        return (
          item.relevance >= 5 && item.likelihood >= 3 && item.intensity >= 70
        );
      });
      setFilteredData(filteredData);
    } else if (screenWidth > 576 && screenWidth <= 1200) {
      const filteredData = data.filter((item) => {
        return (
          item.relevance >= 3 && item.likelihood >= 2 && item.intensity >= 50
        );
      });
      setFilteredData(filteredData);
    } else {
      const filteredData = data.filter((item) => {
        return (
          item.relevance >= 1 && item.likelihood >= 1 && item.intensity >= 40
        );
      });
      setFilteredData(filteredData);
    }
  }, [data, screenWidth]);

  return (
    <div className="mainInsights">
      <h2>Top insights</h2>

      <div className="plot">
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={filteredData}>
            {/* <XAxis dataKey={() => null} /> */}
            {/* <YAxis /> */}
            <Tooltip
              content={(props) => renderCustomTooltip(props, filteredData)}
            />

            <Area
              type="monotone"
              dataKey="relevance"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />

            <Area
              type="monotone"
              dataKey="intensity"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="likelihood"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="info">
        <p style={{ color: "#ffc658" }}>Likelihood</p>
        <p style={{ color: "#82ca9d" }}>Intensity</p>
        <p style={{ color: "#8884d8" }}>Relevance</p>
      </div>
    </div>
  );
}

export default ImportantInsights;
