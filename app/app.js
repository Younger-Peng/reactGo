var React = require('react')
var Application = require('./components/App.react')
var TopicWebAPIUtils = require('./utils/TopicWebAPIUtils')

// Get all topic from server via Ajax call.This will create an action that will be dispatched to the store
TopicWebAPIUtils.getAllTopics()

React.render(
  <Application message="Welcome to planet Bumi" />,
  document.getElementById('app')
)