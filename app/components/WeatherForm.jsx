var React = require('react');
var WeatherForm = React.createClass({
  onFormSubmit: function(e)
  {
    e.preventDefault();
    var location = this.refs.location.value;
    if(location.length > 0 && typeof location === 'string')
    {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render: function(){
    return(
      <div>
        <h2>Get Weather</h2>
        <form onSubmit={this.onFormSubmit}>
          <input type='text' placeholder='Enter city name' ref="location"/>
          <input type='submit' value='Get Weather'/>
        </form>
      </div>
    );
  }
});
module.exports = WeatherForm;
