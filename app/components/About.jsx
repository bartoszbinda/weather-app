var React = require('react');

var About = (props) => {
  return(
    <div>
      <h1 className="text-center"> About</h1>
      <p>This is a weather application build on React.
      </p>
      <p>
        Here are some of tools I used:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - I used React as my Javascript framework
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - An API for searching weather
        </li>
      </ul>
    </div>
  );
};
module.exports = About;
