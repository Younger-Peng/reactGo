var _ = require('lodash')
var assign = require('object-assign')
var EventEmitter = require('events').EventEmitter;
var AppDispatcher = require('../dispatcher/AppDispatcher')
var Constants = require('../constants/Constants')

var _topics = {}
var CHANGE_EVENT = 'change'

function create(text){
  console.log('created text')
  var id = Date.now()
  _topics[id] = {
    id,
    count: 1,
    text
  }
}
function updateCount(id, num){
  _topics[id]['count'] += num
}
function destroy(id){
  delete _topics[id]
}




var Store = assign({}, EventEmitter.prototype, {
  getAll: function(){
    return _topics
  },
  getTopTopic: function(){
    var sum, topTopic, stat;

    sum = _.reduce(_topics, function(sum, topic){
      return sum + topic.count
    }, 0)

    topTopic = _.max(_topics, function(topic){
      return topic.count
    })
    stat = isNaN(topTopic.count/sum) ? 0 : topTopic.count/sum * 100;

    return assign({}, topTopic, {'stat': stat});
  },
  emitChange: function(){
    this.emit(CHANGE_EVENT)
  },
  addChangeListener: function(callback){
    this.on(CHANGE_EVENT, callback)
  },
  removeChangeListener: function(callback){
    this.removeListener(CHANGE_EVENT, callback)
  }
})


AppDispatcher.register(function(payload){
  var action = payload.action;
  var text

  switch(action.actionType){
    case Constants.TOPIC_CREATE:
      text = action.text.trim();
      if(text !== ''){
        create(text)
      }
      break;
    case Constants.TOPIC_INCREMENT:
      updateCount(action.id, 1);
      break;

    case Constants.TOPIC_DECREMENT:
      updateCount(action.id, -1)
      break;
    
    case Constants.TOPIC_DESTROY:
      destroy(action.id)
      break;

    default: 
      return true
  }

  Store.emitChange()

  return true
})

module.exports = Store

