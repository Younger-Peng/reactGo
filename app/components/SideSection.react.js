var React = require('react')
var ReactPropTypes = React.PropTypes
var Actions = require('../actions/Actions')
var TopicCountItem = require('./TopicCountItem.react')
var _ = require('lodash')

var SideSection = React.createClass({
  PropTypes: {
    allTopics: ReactPropTypes.object.isRequired
  },
  render: function(){
    var allTopics = this.props.allTopics
    var topListItems = []
    _.forEach(allTopics, function(topic) {
      topListItems.push(<TopicCountItem title={topic.text} count={topic.count}/>)
    })
    return (
      <div id="sideSection">
        <h3>Votes</h3>
        <ul>{topListItems}</ul>
      </div>
    )
  }
})

module.exports = SideSection