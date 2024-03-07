import React, { useEffect, useState } from "react";
import "./home.scss";
import ImportantInsights from "../Visuals/ImportantInsights/ImportantInsights";
import axios from "axios";
import TopTopics from "../TopTopics/TopTopics";
import TopicDistribution from "../Visuals/TopicDistribution/TopicDistribution";
import { FaFilter, FaSearch } from "react-icons/fa";
import Filter from "../Filter/Filter";
import SectorDistribution from "../Visuals/SectorDistribution/SectorDistribution";
import RegionIntensities from "../Visuals/RegionIntensities/RegionIntensities";
import RegionCountryMap from "../Visuals/RegionCountryMap/RegionCountryMap";

function Home() {
  const [data, setData] = useState([]);
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get("http://localhost:8080/api/getdata");
      setData(data);
    }

    fetchData();
  }, []);
  return (
    <div className="home">
      <div className="filterContainer">
        <div onClick={() => setShowFilter(true)} className="filterBtn">
          <div className="text">filter</div>
          <FaFilter />
        </div>
        {showFilter && (
          // <Filter data={data} modData={setData} open={setShowFilter} />
          <Filter modData={setData} open={setShowFilter} />
        )}
      </div>
      <div className="content-container">
        <div className="box box-1">
          <h2>Top Trending Topics</h2>
          <TopTopics data={data} />
        </div>

        <div className="box box-2">
          <h2>Topic Distribution</h2>
          <TopicDistribution data={data} />
        </div>

        <div className="box box-3">
          <h2>Sector Distribution</h2>
          <SectorDistribution data={data} />
        </div>
        <div className="box box-4">
          <ImportantInsights data={data} />
        </div>

        <div className="box box-5">
          <h2>Intensities of Insights over Regions</h2>
          <RegionIntensities data={data} />
        </div>
        <div className="box box-6">
          <RegionCountryMap data={data} />
        </div>
      </div>
    </div>
  );
}

export default Home;
