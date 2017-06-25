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
      topListItems.push(<TopicCountItem key={topic.id} title={topic.text} count={topic.count}/>)
    })
    return (
      <div id="sideSection">
        <h3>Votes</h3>
        <ul>{topListItems}</ul>
      </div>
    )
  },
  //不知道这行代码是什么意思，目前还没添加到AppDispatcher里
  onClearCompletedClick: function(){
    Actions.destroyCompleted()
  }
})

module.exports = SideSection