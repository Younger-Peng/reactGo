var React = require('react')
var ReactPropTypes = React.PropTypes


var TopicItem = React.createClass({

  render: function(){
    var topic = this.props.topic
    return (
      <li className="view">
        <label>{topic.text}</label>
        <button>+</button>
        <button>-</button>
        <button>delete</button>
      </li>
    )
  }
})

module.exports = TopicItem