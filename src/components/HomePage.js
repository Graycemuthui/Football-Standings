import React, { useEffect } from 'react';
import { BiRightArrowCircle } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaMicrophone } from 'react-icons/fa';
import { IoChevronBackOutline, IoSettingsOutline } from 'react-icons/io5';
import { fetchLeagues } from '../redux/HomePage/HomePage';

const HomePage = () => {
  const leagues = useSelector((state) => state.leagues);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!leagues.length) dispatch(fetchLeagues());
  }, [dispatch, leagues.length]);

  return (
    <>
      <div className="nav-container">
        <Link to="/">
          <IoChevronBackOutline
            style={{ color: '#fff', opacity: '0', cursor: 'auto' }}
          />
        </Link>
        <p>Top teams</p>
        <div className="nav-icons">
          <FaMicrophone />
          <IoSettingsOutline />
        </div>
      </div>
      <div className="main-container">
        <p className="total">
          Total Available &nbsp; Leagues:
          {' '}
          {leagues.length}
        </p>
        <div className="lower-container">
          <div className="leagues-logos">
            {leagues.map((league) => (
              <div key={league.id}>
                <img
                  src={league.logo}
                  alt={league.name}
                  style={{ width: '25px', height: '25px' }}
                />
              </div>
            ))}
          </div>
          <Link to="/Leagues">
            <BiRightArrowCircle
              className="main-icon"
              style={{
                width: '25px',
                height: '25px',
                color: '#fff',
                border: 'none',
                zIndex: '4',
                opacity: '1',
              }}
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
