var React = require('react')
var Actions = require('../actions/Actions')
var TopicTextInput = require('./TopicTextInput.react')
var Statistics = require('./Statistics.react')


var Header = React.createClass({
  render: function(){
    return (
      <header id="header">
        <h1>Trending Topics</h1>
        <h2>Top Topics</h2>
        <Statistics topTopic="test" topStat="90"/>
        <TopicTextInput
          id="new-topic"
          placeholder="What is your concern?"
          onSave={this._onSave}/>

      </header>
    )
  },
  _onSave: function(value){
    console.log(value)
  }
})

module.exports = Header