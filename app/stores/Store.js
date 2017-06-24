var _ = require('lodash')
var assign = require('object-assign')
var EventEmitter = require('events').EventEmitter;


var _topics = {}
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
  }
})


// AppDispatcher.register(function(payload){
//   var action = payload.action;
//   var text

//   switch(action.actionType){
//     case Constants.TOPIC_CREATE:
//       text = action.text.trim();
//       if(text !== ''){
//         create(text)
//       }
//       break;
//     case Constants.TOPIC_CREATE:
//       updateCount(action.id, 1);
//       break;

//     case Constants.TOPIC_DECREMENT:
//       updateCount(action.id, -1)
//       break;

//     default: 
//       return true
//   }

//   Store.emitChange()

//   return true
// })

module.exports = Store

