import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import DisplayDay from './displayDay';

const Output = ({ city, list }) => {
  const emptyObject = Object.keys(city).length === 0 && city.constructor === Object;

  if (!emptyObject && list.length > 0) {
    const filterDay = list.filter(x => x.dt_txt.includes('00:00:00'));

    const displayDays = filterDay.map((item, i) => {
      const date = moment(item.dt_txt).format('dddd, MMMM Do');
      const weather = item.weather[0].main;
      return <DisplayDay date={date} weather={weather} key={i} />;
    });

    return (
      <div>
        <div>The forecast for {city.name} for the next 5 days is:</div>
        <ul>{displayDays}</ul>
      </div>
    );
  }

  return null;
};

Output.propTypes = {
  city: PropTypes.object,
  list: PropTypes.array,
};

Output.defaultProps = {
  city: {},
  list: [],
};

export default Output;
