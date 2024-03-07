import React, { useEffect, useState } from "react";
import "./filter.scss";
import { FaRegWindowClose } from "react-icons/fa";
import EndYear from "./indiFilters/EndYear";
import TopicsFilter from "./indiFilters/TopicsFilter";
import SectorFilter from "./indiFilters/SectorFilter";
import RegionFilter from "./indiFilters/RegionFilter";
import PestFilte from "./indiFilters/PestFilte";
import SourceFilter from "./indiFilters/SourceSelector";
import CountryFilter from "./indiFilters/CountryFilter";
import mainFilterFunction from "./mainFilterFunction";
import axios from "axios";

function Filter({ modData, open }) {
  const [mainData, setMainData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get("http://localhost:8080/api/getdata");
        setMainData(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const [selectedFilters, setSelectedFilters] = useState({
    end_year: null,
    topic: "",
    sector: "",
    region: "",
    pestle: "",
    source: "",
    country: "",
  });

  function handleFilterSubmission(e) {
    e.preventDefault();
    // console.log("form Submitted with filters: ", selectedFilters);
    mainFilterFunction(selectedFilters, mainData, modData);

    open(false);
  }
  function closeFilter() {
    console.log("filter closed");
    open(false);
  }
  return (
    <div onClick={closeFilter} className="filter">
      <div onClick={(e) => e.stopPropagation()} className="mainFilter">
        <div onClick={closeFilter} className="closeBtn">
          <FaRegWindowClose />
        </div>
        {loading ? (
          <h3>Loading</h3>
        ) : (
          <form
            onSubmit={handleFilterSubmission}
            className="filterForm"
            action=""
          >
            <EndYear
              data={mainData}
              onChange={(value) =>
                setSelectedFilters({ ...selectedFilters, end_year: value })
              }
            />
            <TopicsFilter
              data={mainData}
              onChange={(value) =>
                setSelectedFilters({ ...selectedFilters, topic: value })
              }
            />
            <SectorFilter
              data={mainData}
              onChange={(value) =>
                setSelectedFilters({ ...selectedFilters, sector: value })
              }
            />
            <RegionFilter
              data={mainData}
              onChange={(value) =>
                setSelectedFilters({ ...selectedFilters, region: value })
              }
            />
            <PestFilte
              data={mainData}
              onChange={(value) =>
                setSelectedFilters({ ...selectedFilters, pestle: value })
              }
            />
            <SourceFilter
              data={mainData}
              onChange={(value) =>
                setSelectedFilters({ ...selectedFilters, source: value })
              }
            />
            <CountryFilter
              data={mainData}
              onChange={(value) =>
                setSelectedFilters({ ...selectedFilters, country: value })
              }
            />
            <div className="buttonControl">
              <button type="submit" className="subBtn btn">
                Apply
              </button>
              <button
                onClick={() => modData(mainData)}
                className="resetBtn btn"
              >
                Reset
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default Filter;
