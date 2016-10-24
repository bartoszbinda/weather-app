var React = require('react');
var Nav = require('Nav');
var Weather = require('Weather');

var Main = (props) => {
  return(
    <div>
      <Nav />
      <h2>Main component</h2>
      {props.children}
    </div>
);
}
module.exports = Main;
