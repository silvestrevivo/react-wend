import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import DisplayDay from './displayDay';

const Output = props => {
  const {
    weather,
    weather: { city, list },
  } = props;
  const emptyObject = Object.keys(weather).length === 0 && weather.constructor === Object;

  if (!emptyObject && list.length > 0) {
    const filterDay = list.filter(x => x.dt_txt.includes('00:00:00'));

    const displayDays = filterDay.map((item, i) => {
      const date = moment(item.dt_txt).format('dddd, MMMM Do');
      const weatherData = item.weather[0].main;
      return (
        <CSSTransition classNames="displayDay" timeout={10} appear key={i}>
          <DisplayDay date={date} weather={weatherData} delay={i} />
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
  weather: PropTypes.object,
};

Output.defaultProps = {
  weather: {},
};

function mapStateToProps(state) {
  return {
    weather: state.weather,
  };
}

export default connect(
  mapStateToProps,
  null
)(Output);
