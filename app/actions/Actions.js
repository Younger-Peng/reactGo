var AppDispatcher = require('../dispatcher/AppDispatcher')
var Constants = require('../constants/Constants')



var Actions = {
  create: function(text){
    AppDispatcher.handleViewAction({
      actionType: Constants.TOPIC_CREATE,
      text
    })
  },
  increment: function(id){
    AppDispatcher.handleViewAction({
      actionType: Constants.TOPIC_INCREMENT,
      id,
    })
  },
  decrement: function(id){
    AppDispatcher.handleViewAction({
      actionType: Constants.TOPIC_DECREMENT,
      id,
    })
  },
  destroy: function(id){
    AppDispatcher.handleViewAction({
      actionType: Constants.TOPIC_DESTROY,
      id,
    })
  },
  updateText: function(id, text){
    AppDispatcher.handleViewAction({
      actionType: Constants.TODO_UPDATE_TEXT,
      id,
      text
    })
  },
  toggleComplete: function(todo){
    var id = todo.id
    if(todo.complete){
      AppDispatcher.handleViewAction({
        actionType: Constants.TODO_UNDO_COMPLETE,
        id
      })
    } else {
      AppDispatcher.handleViewAction({
        actionType: Constants.TODO_COMPLETE,
        id
      })
    }
  },
  toggleCompleteAll: function(){
    AppDispatcher.handleViewAction({
      actionType: Constants.TODO_TOGGLE_COMPLETE_ALL
    })
  },
  destroyCompleted: function(){
    AppDispatcher.handleViewAction({
      actionType: Constants.TODO_DESTROY_COMPLETED
    })
  }
}

module.exports = Actions