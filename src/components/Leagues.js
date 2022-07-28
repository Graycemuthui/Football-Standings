import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './HomePage.css';

const Leagues = ({ id, logo, name }) => (
  <>
    <div className="league-card">
      <Link key={id} to={`/${id}`} state={{ id }}>
        <img src={logo} alt={name} />
        <p>{name}</p>
      </Link>
    </div>
  </>
);

Leagues.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
};

export default Leagues;
