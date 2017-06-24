var React = require('react')
var Actions = require('../actions/Actions')
var Statistics = require('./Statistics.react')


var Header = React.createClass({
  render: function(){
    return (
      <header id="header">
        <h1>Trending Topics</h1>
        <h2>Top Topics</h2>
        <Statistics topTopic="test" topStat="90"/>
        

      </header>
    )
  }
})

module.exports = Header