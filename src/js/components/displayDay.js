import React from 'react';
import PropTypes from 'prop-types';

const DisplayDay = ({ date, weather }) => (
  <li className="displayDay">
    <p>{date}</p>
    <p>{weather}</p>
  </li>
);

DisplayDay.propTypes = {
  date: PropTypes.string,
  weather: PropTypes.string,
};

DisplayDay.defaultProps = {
  date: '',
  weather: '',
};

export default DisplayDay;
