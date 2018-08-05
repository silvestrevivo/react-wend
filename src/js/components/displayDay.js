import React from 'react';
import PropTypes from 'prop-types';

const DisplayDay = ({ date, weather, delay }) => (
  <li className="displayDay" style={{ transition: `transform .5s ease-in-out .${delay}s` }}>
    <p>{date}</p>
    <p>{weather}</p>
  </li>
);

DisplayDay.propTypes = {
  date: PropTypes.string,
  weather: PropTypes.string,
  delay: PropTypes.number,
};

DisplayDay.defaultProps = {
  date: '',
  weather: '',
  delay: 0,
};

export default DisplayDay;
