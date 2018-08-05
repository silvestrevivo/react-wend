import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import DisplayDay from './displayDay';

const Output = ({ city, list }) => {
  const emptyObject = Object.keys(city).length === 0 && city.constructor === Object;

  if (!emptyObject && list.length > 0) {
    const filterDay = list.filter(x => x.dt_txt.includes('00:00:00'));

    const displayDays = filterDay.map((item, i) => {
      const date = moment(item.dt_txt).format('dddd, MMMM Do');
      const weather = item.weather[0].main;
      return (
        <CSSTransition classNames="displayDay" timeout={10} appear key={i}>
          <DisplayDay date={date} weather={weather} delay={i} />
        </CSSTransition>
      );
    });

    return (
      <div className="output">
        <p>The forecast for {city.name} for the next 5 days is:</p>
        <TransitionGroup component="ul" className="list">
          {displayDays}
        </TransitionGroup>
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
