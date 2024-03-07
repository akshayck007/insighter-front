import React from "react";
import "./indiFilters.scss";
import filterFunction from "./filterFunction";

function TopicsFilter({ data, onChange }) {
  const topicSet = filterFunction(data, "topic", true);
  function handleOptionSelect(event) {
    onChange(event.target.value);
  }
  return (
    <div className="topicsFilter filterComp">
      <label htmlFor="topicSelector">Topic</label>
      <select onChange={handleOptionSelect} name="" id="topicSelector">
        {["select", ...topicSet].map((item, index) => {
          return (
            <option key={index} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default TopicsFilter;
