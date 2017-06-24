var React = require('react')

var Application = require('./components/App.react')

React.render(
  <Application message="Welcome to planet Bumi" />,
  document.getElementById('app')
)