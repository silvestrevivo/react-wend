import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import axios from 'axios';
import { API_KEY } from './api-key';
import Input from './input';
import Output from './output';
import Footer from './footer';

const URL = `https://api.openweathermap.org/data/2.5/forecast?q=`;
// we import de API_KEY from a hide file in the repo

class App extends Component {
  state = {
    valueInput: '',
    data: {},
  };

  handleKeyPress = event => {
    if (event.key === 'Enter') {
      const { valueInput } = this.state;
      this.setState({ data: {} });
      axios
        .get(`${URL}${valueInput}&appid=${API_KEY}`)
        .then(response => {
          this.setState({
            data: response.data,
            valueInput: '',
          });
        })
        .catch(error => console.log(error));
    }
  };

  render() {
    const {
      valueInput,
      data: { city, list },
    } = this.state;
    return (
      <div>
        <h1>React Wend</h1>
        <Input
          keypres={this.handleKeyPress}
          change={e => this.setState({ valueInput: e.target.value })}
          valueInput={valueInput}
        />
        <Output city={city} list={list} />
        <Footer />
      </div>
    );
  }
}

export default hot(module)(App);
