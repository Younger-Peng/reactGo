var React = require('react')

var Statistics = React.createClass({
  render: function(){
    return (
      <div id="stat-section">
        <span className="topic">{this.props.topTopic}</span>
        <span>{this.props.topStat + '%'}</span>
      </div>
    )
  }
})

module.exports = Statistics