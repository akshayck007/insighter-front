import React from "react";
import "./indiFilters.scss";
import filterFunction from "./filterFunction";

function RegionFilter({ data, onChange }) {
  const regionSet = filterFunction(data, "region", true);

  function handleOptionSelect(event) {
    onChange(event.target.value);
  }
  return (
    <div className="regionFilter filterComp">
      <label htmlFor="regionSelector">Region</label>
      <select onChange={handleOptionSelect} name="" id="regionSelector">
        {["select", ...regionSet].map((item, index) => {
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

export default RegionFilter;
