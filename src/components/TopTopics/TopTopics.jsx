import React from "react";
import TopicTrends from "../Visuals/TopicTrends/TopicTrends";
import "./toptopics.scss";
import findBest5 from "./findBest5";

function TopTopics({ data }) {
  const filteredSortedData = data
    .filter((item) => item.topic !== "" && item.published !== "")
    .sort((a, b) => {
      const dateA = new Date(a.published);
      const dateB = new Date(b.published);
      return dateA - dateB;
    });
  // for (let a = 0; a < 10; a++) {
  //   if (filteredSortedData[a] === undefined) {
  //     console.log(a, "OBject: ", filteredSortedData[a]);
  //   }
  // }
  // const testArr = [];
  // for (let a = 0; a < filteredSortedData.length; a++) {
  //   if (filteredSortedData[a]) {
  //     testArr[a] = new Date(filteredSortedData[a].published).getFullYear();
  //   }
  // }
  // console.log(testArr[testArr.length - 1]);
  //FINDING TOP 5 TOPICS
  const top5Topics = findBest5(filteredSortedData, "topic");
  return (
    <div className="topics">
      <div className="topic topic-1">
        <div className="info">
          <h2>#1. {top5Topics[0]}</h2>
        </div>
        <div className="chartinfo">
          <div className="chart">
            <TopicTrends
              topicToPlot={top5Topics[0]}
              data={filteredSortedData}
            />
          </div>
        </div>
      </div>
      <div className="topic topic-1">
        <div className="info">
          <h2>#2. {top5Topics[1]}</h2>
        </div>
        <div className="chartinfo">
          <div className="chart">
            <TopicTrends
              topicToPlot={top5Topics[1]}
              data={filteredSortedData}
            />
          </div>
        </div>
      </div>
      <div className="topic topic-3">
        <div className="info">
          <h2>#3. {top5Topics[2]}</h2>
        </div>
        <div className="chartinfo">
          <div className="chart">
            <TopicTrends
              topicToPlot={top5Topics[2]}
              data={filteredSortedData}
            />
          </div>
        </div>
      </div>
      <div className="topic topic-4">
        <div className="info">
          <h2>#4. {top5Topics[3]}</h2>
        </div>
        <div className="chartinfo">
          <div className="chart">
            <TopicTrends
              topicToPlot={top5Topics[3]}
              data={filteredSortedData}
            />
          </div>
        </div>
      </div>
      <div className="topic topic-5">
        <div className="info">
          <h2>#5. {top5Topics[4]}</h2>
        </div>
        <div className="chartinfo">
          <div className="chart">
            <TopicTrends
              topicToPlot={top5Topics[4]}
              data={filteredSortedData}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopTopics;
