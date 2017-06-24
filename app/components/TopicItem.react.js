var React = require('react')
var ReactPropTypes = React.PropTypes
var Actions = require('../actions/Actions')

var TopicItem = React.createClass({

  render: function(){
    var topic = this.props.topic
    return (
      <li className="view">
        <label>{topic.text}</label>
        <button className="increment" onClick={this._onIncrement}>+</button>
        <button className="decrement" onClick={this._onDecrement}>-</button>
        <button className="destroy" onClick={this._onDestroy}>delete</button>
      </li>
    )
  },
  _onIncrement: function(){
    console.log(this.props.topic)
    Actions.increment(this.props.topic.id, this.props.topic.text)
  },
  _onDecrement: function(){
    console.log('decrement')
  },
  _onDestroy: function(){
    console.log('destroy')
  }
})

module.exports = TopicItem