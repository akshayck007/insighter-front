import React from "react";
import "./indiFilters.scss";
import filterFunction from "./filterFunction";

function PestFilte({ data, onChange }) {
  const pestSet = filterFunction(data, "pestle", true);

  function handleOptionSelect(event) {
    onChange(event.target.value);
  }
  return (
    <div className="pestFilter filterComp">
      <label htmlFor="pestSelector">Pestle</label>
      <select onChange={handleOptionSelect} name="" id="pestSelector">
        {["select", ...pestSet].map((item, index) => {
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

export default PestFilte;
