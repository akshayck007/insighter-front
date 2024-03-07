import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function renderCustomTooltip({ payload, active }, data) {
  if (payload && active && payload.length) {
    const region = payload[0].payload.region;
    const intensity = payload[0].payload.intensity;
    const insight = payload[0].payload.insight;
    return (
      <div className="custom-tooltip">
        <p>region: {region} </p>
        <p>intensity: {intensity}</p>
        <p>insight: {insight}</p>
      </div>
    );
  }
}

function RegionIntensities({ data }) {
  const filteredData = data.filter((item) => item.region !== "");
  return (
    <ResponsiveContainer width="100%" height={400}>
      <ScatterChart margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
        <XAxis label="region" tick={false} />
        <YAxis dataKey="intensity" />
        <Tooltip
          content={(props) => renderCustomTooltip(props, filteredData)}
        />
        {/* Each Scatter point represents a unique combination of region and intensity */}
        <Scatter data={filteredData} fill="#8884d8" />
      </ScatterChart>
    </ResponsiveContainer>
  );
}

export default RegionIntensities;
