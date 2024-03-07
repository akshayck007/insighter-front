import React from "react";

import {
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

function renderCustomTooltip(props, data) {
  const { active, payload } = props;

  if (active && payload && payload.length) {
    const relevance = payload[0].payload.relevance;
    const intensity = payload[0].payload.intensity;
    const insight = payload[0].payload.insight;

    return (
      <div className="custom-tooltip">
        <p>{`relevance: ${relevance}`}</p>
        <p>{`intensity: ${intensity}`}</p>
        <p>{`Insight: ${insight}`}</p>
      </div>
    );
  }

  return null;
}

const RelevanceVsIntensityChart = ({ data }) => (
  <ResponsiveContainer width="100%" height="100%">
    <ScatterChart margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
      <XAxis
        label={{
          value: "Intensity",
          position: "insideRight",
          dx: -150,
          dy: 15,
        }}
        dataKey="relevance"
        type="number"
      />
      <YAxis
        label={{
          value: "Intensity",
          angle: -90,
          position: "insideRight",
          dx: -40,
          dy: 0,
        }}
        dataKey="intensity"
        scale="linear"
      />
      <Scatter
        data={data}
        fill="#8884d8"
        animationDuration={500}
        animationEasing="ease-out"
      />
      <Tooltip content={(props) => renderCustomTooltip(props, data)} />
    </ScatterChart>
  </ResponsiveContainer>
);

export default RelevanceVsIntensityChart;
