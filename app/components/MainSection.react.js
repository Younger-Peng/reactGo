var React = require('react')
var ReactPropTypes = React.PropTypes
var TopicItem = require('./TopicItem.react')

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
    for(var key in allTopics){
      topics.push(<TopicItem key={key} topic={allTopics[key]}/>)
    }
    return (
      <section id="main-section">
        <input
          id="toggle-all"
          type="checkbox"
          onChange={this._onToggleCompleteAll}/>
        <label htmlFor="toggle-all">Toggle order</label>
        <ul id="todo-list">{topics}</ul>
      </section>
    )
  },
  _onToggleCompleteAll: function(){
    console.log('toggleCompleteAll')
    Actions.toggleCompleteAll()
  }
})

module.exports = MainSection