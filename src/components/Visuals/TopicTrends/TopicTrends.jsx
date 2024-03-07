import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import "./topicTrends.scss";

function renderCustomTooltip(props, data) {
  const { active, payload } = props;

  if (active && payload && payload.length) {
    const count = payload[0].payload.count;
    const year = payload[0].payload.start_year;

    return (
      <div className="custom-tooltip">
        <p>{`insights count: ${count}`}</p>
        <p>{`year: ${year}`}</p>
      </div>
    );
  }

  return null;
}

function TopicTrends({ data, topicToPlot }) {
  const topicData = data.filter((item) => item.topic === topicToPlot);

  //year count object
  const yearCount = topicData.reduce((acc, item) => {
    const year = new Date(item.published).getFullYear();
    acc[year] = (acc[year] || 0) + 1;
    return acc;
  }, {});

  //convert count object to array
  const yearCountArray = Object.keys(yearCount).map((item) => {
    return { start_year: parseInt(item), count: yearCount[item] };
  });

  // console.log(yearCountArray);
  // x -axis year, y-axis count [{year:2016,count:5},{year:2017,count:3} etc...]

  return (
    <div className="topicTrends">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={yearCountArray}>
          {/* <XAxis dataKey="start_year" type="category" /> */}
          {/* <YAxis /> */}
          <Tooltip
            content={(props) => renderCustomTooltip(props, yearCountArray)}
          />
          {/* <Legend /> */}
          <Line type="monotone" dataKey="count" stroke="#8884d8" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default TopicTrends;
