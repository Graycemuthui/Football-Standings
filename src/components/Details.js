import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BiRightArrowCircle } from 'react-icons/bi';
import { useLocation, Link } from 'react-router-dom';
import { FaMicrophone } from 'react-icons/fa';
import { IoChevronBackOutline, IoSettingsOutline } from 'react-icons/io5';
import { fetchLeaguesDetails } from '../redux/Details/Details';
import './Details.css';

const Details = () => {
  const details = useSelector((state) => state.details);
  const [title, setTitle] = useState('Top Teams');
  const dispatch = useDispatch();
  const location = useLocation();
  const { id } = location.state || {};

  useEffect(() => {
    dispatch(fetchLeaguesDetails(id));
  }, []);

  useEffect(() => {
    switch (window.location.pathname) {
      case '/aus.1':
        setTitle('Australian A-League');
        break;
      case '/arg.1':
        setTitle('Argentine Liga Profesional');
        break;
      case '/bra.1':
        setTitle('Brazilian Serie A');
        break;
      case '/chn.1':
        setTitle('Chinese Super League');
        break;
      case '/ned.1':
        setTitle('Dutch Eredivisie');
        break;
      case '/eng.1':
        setTitle('English Premier League');
        break;
      case '/fra.1':
        setTitle('French Ligue 1');
        break;
      case '/ger.1':
        setTitle('German Bundesliga');
        break;
      case '/idn.1':
        setTitle('Indonesian Liga 1');
        break;
      case '/ita.1':
        setTitle('Italian Serie A');
        break;
      case '/jpn.1':
        setTitle('Japanese J League');
        break;
      case '/mys.1':
        setTitle('Malaysian Super Leagu');
        break;
      case '/mex.1':
        setTitle('Mexican Liga BBVA MX');
        break;
      case '/por.1':
        setTitle('Portuguese Liga');
        break;
      case '/rus.1':
        setTitle('Russian Premier League');
        break;
      case '/sgp.1':
        setTitle('Singaporean Premier League');
        break;
      case '/esp.1':
        setTitle('Spanish Primera División');
        break;
      case '/tha.1':
        setTitle('Thai Premier League');
        break;
      case '/tur.1':
        setTitle('Turkish Super Lig');
        break;
      case '/uga.1':
        setTitle('Ugandan Super League');
        break;
      default:
        setTitle('Standings');
    }
  }, []);

  return (
    <>
      <div className="nav-container">
        <Link to="/">
          <IoChevronBackOutline style={{ color: '#fff' }} />
        </Link>
        <p>{title}</p>
        <div className="nav-icons">
          <FaMicrophone />
          <IoSettingsOutline />
        </div>
      </div>
      <div className="details-container">
        <div className="total">
          Total teams:
          {details.length}
        </div>
        <div className="clubs-logos">
          {details.map((club) => (
            <div key={club.name}>
              <img
                src={club.logo}
                alt={club.name}
                style={{ width: '25px', height: '25px' }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="head">Teams</div>
      <div className="grid-container">
        <div>
          {details.map((club) => (
            <div key={club.name} className="club-container">
              <div className="name-logo">
                <img src={club.logo} alt={club.name} />
                <p>{club.name}</p>
              </div>
              <div className="points-arrow">
                <p>
                  {club.rank}
                  {' '}
                  points
                </p>
                <BiRightArrowCircle />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Details;
