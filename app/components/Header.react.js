var React = require('react')
var Actions = require('../actions/Actions')
var TopicTextInput = require('./TopicTextInput.react')
var Statistics = require('./Statistics.react')


var Header = React.createClass({
  render: function(){
    return (
      <header id="header">
        <h1>Trending Burger Places</h1>
        <h2>Top Burger</h2>
        <Statistics topTopic={this.props.topTopic} topStat={this.props.topStat} />
        <TopicTextInput
          id="new-topic"
          placeholder="Fav Burger?"
          onSave={this._onSave}/>

      </header>
    )
  },
  _onSave: function(text){
    console.log(text)
    if(text.trim()){
      Actions.create(text)
    }
  }
})

module.exports = Header