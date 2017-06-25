var React = require('react')
var ReactPropTypes = React.PropTypes
var TopicItem = require('./TopicItem.react')
var _ = require('lodash')

var MainSection = React.createClass({
  propTypes: {
    allTopics: ReactPropTypes.object.isRequired
  },
  render: function(){
    var keys = Object.keys(this.props.allTopics)
    if(keys.length < 1){
      console.log(keys)
      return null
    }
    var allTopics = this.props.allTopics;
    var topics = [];
    _.forEach(allTopics, function(value, key){
      topics.push(<TopicItem id={key} key={key} topic={value} />)
    })
    return (
      <section id="main-section">
        <h3>Vote</h3>
        <ul id="todo-list">{topics}</ul>
      </section>
    )
  }

})

module.exports = MainSection