import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BiRightArrowCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { FaMicrophone } from 'react-icons/fa';
import { IoChevronBackOutline, IoSettingsOutline } from 'react-icons/io5';
import { fetchLeagues } from '../redux/HomePage/HomePage';
import './LeagueList.css';

const LeaguesList = () => {
  const leagues = useSelector((state) => state.leagues);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLeagues());
  }, [dispatch]);

  return (
    <>
      <div className="nav-bar">
        <Link to="/">
          <IoChevronBackOutline className="chevron" />
        </Link>
        <p>All Leagues</p>
        <div className="nav-icons">
          <FaMicrophone />
          <IoSettingsOutline />
        </div>
      </div>
      <div>
        <div className="league-list__container">
          <div className="total">
            Total teams:
            {leagues.length}
          </div>
          <div className="league-logos">
            {leagues.map((league) => (
              <div key={league.name}>
                <div>
                  <img
                    src={league.logo}
                    alt={league.name}
                    style={{ width: '25px', height: '25px' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="head">All available leagues</div>
        <div>
          {leagues.map((league) => (
            <div key={league.name} className="club-container">
              <div className="name-logo">
                <img src={league.logo} alt={league.name} />
                <p>{league.name}</p>
              </div>
              <div className="points-arrow">
                <BiRightArrowCircle />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default LeaguesList;
