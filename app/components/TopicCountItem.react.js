var React = require('react')

var TopicCountItem = React.createClass({
  render: function(){
    return (
      <li key={this.props.key}>
        <span>{this.props.title}</span>
        <span className="count">{this.props.count}</span>
      </li>
    )
  }
})

module.exports = TopicCountItem