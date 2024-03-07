import React from "react";
import "./indiFilters.scss";
import filterFunction from "./filterFunction";

function SourceFilter({ data, onChange }) {
  const sourceSet = filterFunction(data, "source", true);
  function handleOptionSelect(event) {
    onChange(event.target.value);
  }
  return (
    <div className="sourceFilter filterComp">
      <label htmlFor="sourceSelector">Source</label>
      <select onChange={handleOptionSelect} name="" id="sourceSelector">
        {["select", ...sourceSet].map((item, index) => {
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

export default SourceFilter;
