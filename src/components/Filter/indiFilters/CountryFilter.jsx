import React from "react";
import filterFunction from "./filterFunction";
import "./indiFilters.scss";

function CountryFilter({ data, onChange }) {
  const countrySet = filterFunction(data, "country", true);

  function handleOptionSelect(event) {
    onChange(event.target.value);
  }
  return (
    <div className="countryFilter filterComp">
      <label htmlFor="countrySelector">Country</label>
      <select onChange={handleOptionSelect} name="" id="countrySelector">
        {["select", ...countrySet].map((item, index) => {
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

export default CountryFilter;
