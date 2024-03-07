import React from "react";
import "./indiFilters.scss";
import filterFunction from "./filterFunction";

function SectorFilter({ data, onChange }) {
  const sectorSet = filterFunction(data, "sector", true);
  function handleOptionSelect(event) {
    onChange(event.target.value);
  }
  return (
    <div className="sectorFilter filterComp">
      <label htmlFor="sectorSelector">Sector</label>
      <select onChange={handleOptionSelect} name="" id="sectorSelector">
        {["select", ...sectorSet].map((item, index) => {
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

export default SectorFilter;
