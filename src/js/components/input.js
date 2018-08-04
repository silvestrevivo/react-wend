import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ keypres, valueInput, change }) => (
  <div className="inputWeather">
    <label htmlFor="city">
      Check the forecast for the next 5 days
      <input
        type="text"
        value={valueInput}
        id="city"
        placeholder="name of city"
        onChange={change}
        onKeyPress={keypres}
      />
    </label>
  </div>
);

Input.propTypes = {
  keypres: PropTypes.func,
  change: PropTypes.func,
  valueInput: PropTypes.string,
};

Input.defaultProps = {
  keypres: PropTypes.func,
  change: PropTypes.func,
  valueInput: null,
};

export default Input;
