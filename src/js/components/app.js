import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions';
import Input from './input';
import Output from './output';
import Footer from './footer';

class App extends Component {
  static propTypes = {
    fetchWeather: PropTypes.func,
  };

  static defaultProps = {
    fetchWeather: PropTypes.func,
  };

  state = {
    valueInput: '',
  };

  handleKeyPress = event => {
    if (event.key === 'Enter') {
      const { valueInput } = this.state;
      const { fetchWeather } = this.props;
      // this.setState({ data: {} });
      fetchWeather(valueInput);
    }
  };

  render() {
    const { valueInput } = this.state;
    console.log(this.props);
    return (
      <div>
        <h1>React Wend</h1>
        <Input
          keypres={this.handleKeyPress}
          change={e => this.setState({ valueInput: e.target.value })}
          valueInput={valueInput}
        />
        <Output />
        <Footer />
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(hot(module)(App));
