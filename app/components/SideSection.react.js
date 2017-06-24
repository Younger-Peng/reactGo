var React = require('react')
var ReactPropTypes = React.PropTypes


var SideSection = React.createClass({
  render: function(){
    return (
      <div id="sideSection">
        <h3>Votes</h3>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>
    )
  }
})

module.exports = SideSection