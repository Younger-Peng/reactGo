var Dispatcher = require('flux').Dispatcher;
var assign  = require('object-assign');

// add a new method to Dispatcher,because there is a source to add .
var AppDispatcher = assign(new Dispatcher(), {
  handleViewAction: function(action){
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    })
  },
  handleServerAction: function(action){
    this.dispatch({
      source: 'SERVER_ACTION',
      action
    })
  }
})

module.exports = AppDispatcher