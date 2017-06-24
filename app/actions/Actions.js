var AppDispatcher = require('../dispatcher/AppDispatcher')
var Constants = require('../constants/Constants')



var Actions = {
  create: function(text){
    AppDispatcher.handleViewAction({
      actionType: Constants.TOPIC_CREATE,
      text: text
    })
  },
  increment: function(id, text){
    AppDispatcher.handleViewAction({
      actionType: Constants.TOPIC_INCREMENT,
      id: id,
      text: text
    })
  },
  decrement: function(id, text){
    AppDispatcher.handleViewAction({
      actionType: Constants.TOPIC_DECREMENT,
      id,
      text
    })
  }
}

module.exports = Actions