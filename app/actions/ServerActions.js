var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/Constants')

var ServerActions = {
  receiveCreatedTopics: function(data){
    AppDispatcher.handleServerAction({
      actionType: Constants.RECEIVE_RAW_TOPICS,
      data
    })
  }
}

module.exports = ServerActions