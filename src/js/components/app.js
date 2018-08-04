import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import axios from 'axios';
import { API_KEY } from './api-key';
import Input from './input';
import Output from './output';
import Footer from './footer';

const URL = `https://api.openweathermap.org/data/2.5/forecast?q=London&appid=${API_KEY}`;

class App extends Component {
  state = {};

  componentDidMount() {
    axios.get(URL).then(response => console.log(response.data));
  }

  render() {
    return (
      <div>
        <h1>React Wend</h1>
        <Input />
        <Output />
        <Footer />
      </div>
    );
  }
}

export default hot(module)(App);
