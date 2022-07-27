import React, { useEffect } from 'react';
import { BiRightArrowCircle } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaMicrophone } from 'react-icons/fa';
import { IoSettingsOutline } from 'react-icons/io5';
import { fetchLeagues } from '../redux/HomePage/HomePage';
import Leagues from './Leagues';
import './HomePage.css';

const HomePage = () => {
  const leagues = useSelector((state) => state.leagues);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!leagues.length) dispatch(fetchLeagues());
  }, [dispatch, leagues.length]);

  return (
    <>
      <div className="nav-bar">
        <p>TOP TEAMS</p>
        <div className="nav-icons">
          <FaMicrophone />
          <IoSettingsOutline />
        </div>
      </div>
      <div className="main-container">
        <p className="text">
          Total Available &nbsp; Leagues:
          {leagues.length}
        </p>
        <div className="logos-container">
          <div className="leagues-logos">
            {leagues.map((league) => (
              <div key={league.id}>
                <img src={league.logo} alt={league.name} className="logo-img" />
              </div>
            ))}
          </div>
          <Link to="/Leagues">
            <BiRightArrowCircle className="main-icon" />
          </Link>
        </div>
      </div>
      <Leagues />
    </>
  );
};

export default HomePage;
