var React = require('react')
var ReactPropTypes = React.PropTypes

var MainSection = React.createClass({
  render: function(){
    return (
      <section id="main">
        <input
          id="toggle-all"
          type="checkbox"
          onChange={this._onToggleCompleteAll}/>
        <label htmlFor="toggle-all">Toggle order</label>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </section>
    )
  },
  _onToggleCompleteAll: function(){
    console.log('toggleCompleteAll')
  }
})

module.exports = MainSection