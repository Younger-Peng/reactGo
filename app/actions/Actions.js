var AppDispatcher = require('../dispatcher/AppDispatcher')
var Constants = require('../constants/Constants')



var Actions = {
  create: function(text){
    AppDispatcher.handleViewAction({
      actionType: Constants.TOPIC_CREATE,
      text: text
    })
  }
}

module.exports = Actions