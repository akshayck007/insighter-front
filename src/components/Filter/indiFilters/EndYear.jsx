import React, { useEffect, useRef, useState } from "react";
import "./indiFilters.scss";
import filterFunction from "./filterFunction";

function EndYear({ data, onChange }) {
  // const endYearSet = new Set();
  // const filteredAndSortedArray = data
  //   .filter((item) => item.end_year !== null)
  //   .sort((a, b) => a.end_year - b.end_year);

  // filteredAndSortedArray.forEach((item) => endYearSet.add(item.end_year));
  const endYearSet = filterFunction(data, "end_year", false);

  function handleOptionSelect(event) {
    onChange(Number(event.target.value));
  }

  return (
    <div className="endYearFilter filterComp">
      <label htmlFor="endYearSelector">End Year</label>
      <select name="select" onChange={handleOptionSelect} id="endYearSelector">
        {["select", ...endYearSet].map((item, index) => {
          return (
            <option itemType="checkbox" key={index} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default EndYear;
