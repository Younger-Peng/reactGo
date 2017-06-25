var React = require('react')
var ReactPropTypes = React.PropTypes
var Actions = require('../actions/Actions')
var TopicTextInput = require('./TopicTextInput.react')
var cx = require('react/lib/cx')

var TopicItem = React.createClass({
  propTypes: {
    topic: ReactPropTypes.object.isRequired
  },
  getInitialState: function(){
    return {
      isEditing: false
    }
  },
  render: function(){
    var topic = this.props.topic
    var input
    if(this.state.isEditing){
      input = 
      <TopicTextInput
        className="edit"
        onSave={this._onSave}
        value={topic.text}
       />
    }

    return (
      <li className={cx({
        'editing': this.state.isEditing
      })} key={topic.id} >
        <div className="view">
          <label onDoubleClick={this._onDoubleClick}>{topic.text}</label>
          <button className="increment" onClick={this._onIncrement}>+</button>
          <button className="decrement" onClick={this._onDecrement}>-</button>
          <button className="destroy" onClick={this._onDestroy}>{String.fromCharCode(215)}</button>
        </div>
        {input}
      </li>
    )
  },
  _onDoubleClick: function(){
    this.setState({
      isEditing: true
    })
  },
  _onIncrement: function(){
    console.log(this.props.topic)
    Actions.increment(this.props.topic.id)
  },
  _onDecrement: function(){
    Actions.decrement(this.props.topic.id)
  },
  _onDestroy: function(){
    Actions.destroy(this.props.topic.id)
  },
  _onToggleComplete: function(){
    Actions.toggleComplete(this.props.topic)
  },
  _onSave: function(text){
    Actions.updateText(this.props.topic.id, text)
    this.setState({
      isEditing: false
    })
  }
})

module.exports = TopicItem