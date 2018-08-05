<div align="center">
  <img width="120" height="120"
    src="https://sandstorm.de/_Resources/Persistent/3285416e8503b2c8354c321bcd690cf550b8b2d3/React-Logo.svg">
  <a href="https://www.wend.nl/">
    <img width="400" height="120"
      src="https://uploads-ssl.webflow.com/55926763654c69dc323a9764/5648e004100234bf2051f938_5502df575885f7ec108c8a98_wend.png">
  </a>
  <h1>React Wend</h1>
</div>


This is an small excercise in React which consists in an application fetching data from https://openweathermap.org/api to show results about the weather forecast for the next 5 days. To check it out, download the master branch and then:


    $ yarn

    $ yarn dev

For production:

    $ yarn run build

## Explanation

This project is based in __React + Webpackt4__. For more information about how the webpack configuration is done, please visit [webpack4 respository][1] from this GitHub account. In general lines, the bundler compiles JavaScript based on Babel, CSS with PostCSS/nano and there are configurations for development and production. Eslint is configured following the [AirBnb][2] standard, defining in VSCode the Prettier custom style as well.

To call the server is used __Axios__ as library to use promises for catching data. This way is more complete than the simple __fetch()__ methode from native JavaScript. For more information about this, please visit the next personal [repository][3] with an explanation which is showing the differences between both methods.

## Steps in development
The application was done previously using the _state_ of the _stateful component_ from the __app.js__ file. Once that this was ok, it was the __CSSTransition__ library implemented to show each element with a simple animation. Then was completed with the style using __SASS__.

The last step was to migrate the local state to __REDUX__ _thunk_. There are one action with two types, with the aim to delete the results eacht time a new searching is done. Otherwise, the animation would be visible just once.


[1]: https://github.com/silvestrevivo/webpack4-starter
[2]: https://github.com/airbnb/javascript
[3]: https://github.com/silvestrevivo/axios-demo
