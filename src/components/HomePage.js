/* eslint-disable linebreak-style */
/* eslint-disable quotes */

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { FaMicrophone } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { fetchLeagues } from "../redux/HomePage/HomePage";
import Leagues from "./Leagues";
import "./HomePage.css";

const HomePage = () => {
  const leagues = useSelector((state) => state.leagues);
  const dispatch = useDispatch();

  useEffect(() => {
    if (leagues.length === 0) {
      dispatch(fetchLeagues());
    }
  }, []);

  const [search, setSearch] = useSearchParams();

  return (
    <>
      <div className="nav-bar">
        <p>TOP TEAMS</p>
        <div className="nav-icons">
          <FaMicrophone size={30} />
          <IoSettingsOutline size={30} />
        </div>
      </div>
      <div />
      <div className="main-container">
        <input
          className="searchbar"
          type="text"
          value={search.get("filter") || ""}
          placeholder="Enter league name.."
          onChange={(e) => {
            const filter = e.target.value;
            if (filter) {
              setSearch({ filter });
            } else {
              setSearch({});
            }
          }}
        />
        <div className="logo-image">
          {leagues.map((element) => (
            <img key={element.id} src={element.logo} alt={element.name} />
          ))}
        </div>
      </div>
      <div className="leagues-container">
        {leagues
          .filter((element) => {
            const filter = search.get("filter");
            if (!filter) return true;
            const leagueName = element.name.toLowerCase();
            return leagueName.startsWith(filter.toLowerCase());
          })
          .map((element) => (
            <>
              <Leagues
                id={element.id}
                name={element.name}
                logo={element.logo}
                key={element.id}
              />
            </>
          ))}
      </div>
    </>
  );
};

export default HomePage;
