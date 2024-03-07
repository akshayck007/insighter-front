import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import findBest5 from "../../TopTopics/findBest5";
import "./sectorsDistribution.scss";

function renderCustomTooltip({ payload, active }, data) {
  if (payload && active && payload.length) {
    const sector = payload[0].payload.sector;
    const count = payload[0].payload.count;
    return (
      <div className="custom-tooltip">
        <p>sector: {sector} </p>
        <p>count: {count}</p>
      </div>
    );
  }
}

function SectorDistribution({ data }) {
  const filteredData = data.filter((item) => item.sector !== "");
  const top5Sectors = findBest5(filteredData, "sector");

  const sectorsAndCount = top5Sectors.map((item) => {
    const count = filteredData.reduce((acc, countItem) => {
      countItem.sector === item ? acc++ : acc;
      return acc;
    }, 0);
    return { sector: item, count };
  });
  // console.log(sectorsAndCount);
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AF19FF"];

  return (
    <div className="sectorDistribution">
      <div className="chart">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={sectorsAndCount}
              dataKey="count"
              cx="50%"
              cy="50%"
              outerRadius={80}
              // innerRadius={45}
              fill="#8884d8"
              stroke="rgb(136, 153, 187)"
              strokeWidth={2}
              paddingAngle={0} // Set your desired padding angle here
            >
              {sectorsAndCount.map((item, index) => (
                <Cell
                  key={`cell-${item.index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              content={(props) => renderCustomTooltip(props, sectorsAndCount)}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="chartInfo">
        {sectorsAndCount.map((item, index) => {
          return (
            <p
              key={index}
              style={{ border: `2px solid ${COLORS[index % COLORS.length]}` }}
            >
              <div>{item.sector}</div>
              <div>insights: {item.count}</div>
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default SectorDistribution;
