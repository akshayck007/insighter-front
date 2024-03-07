import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import findBest5 from "../../TopTopics/findBest5";
import "./topicDistribution.scss";

function renderCustomTooltip({ payload, active }, data) {
  if (payload && active && payload.length) {
    const topic = payload[0].payload.topic;
    const count = payload[0].payload.count;
    return (
      <div className="custom-tooltip">
        <p>topic: {topic} </p>
        <p>count: {count}</p>
      </div>
    );
  }
}

function TopicDistribution({ data }) {
  const filteredData = data.filter((item) => item.topic !== "");

  const top5Topics = findBest5(filteredData, "topic");
  // console.log(top5Topics);

  const topicsAndCount = top5Topics.map((item) => {
    const count = filteredData.reduce((acc, countItem) => {
      countItem.topic === item ? acc++ : acc;
      return acc;
    }, 0);
    return { topic: item, count };
  });

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AF19FF"];

  return (
    <div className="topicDistribution">
      <div className="chart">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={topicsAndCount}
              dataKey="count"
              cx="50%"
              cy="50%"
              outerRadius={80}
              innerRadius={45}
              fill="#8884d8"
              stroke="rgb(136, 153, 187)"
              strokeWidth={2}
              paddingAngle={0} // Set your desired padding angle here
            >
              {topicsAndCount.map((item, index) => (
                <Cell
                  key={`cell-${item.index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              content={(props) => renderCustomTooltip(props, topicsAndCount)}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="chartInfo">
        {topicsAndCount.map((item, index) => {
          return (
            <p
              key={index}
              style={{ border: `2px solid ${COLORS[index % COLORS.length]}` }}
            >
              <div>{item.topic}</div>
              <div>insights: {item.count}</div>
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default TopicDistribution;
