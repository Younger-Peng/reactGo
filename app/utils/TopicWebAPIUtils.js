var $ = require('jquery')
var ServerActions = require('../actions/ServerActions')

var defaultConfig = {
  url: '/topics',
  type: 'GET',
  dataType: 'json'
}

module.exports = {
  getAllTopics: function(){
    $.ajax(defaultConfig)
     .then(function(data, textStatus, jqXHR){
      ServerActions.receiveCreatedTopics(data)
     }, function(jqXHR, data, errorThrown){
       console.log(errorThrown)
     })
  },
  addTopic: function(topic){
    $.ajax({
      url: '/topic',
      data: JSON.stringify(topic),
      type: 'POST',
      contentType: 'application/json; charset=UTF-8' 
    })
    .then(function(data, textStatus, jqXHR){
      console.log(data)
    }, function(jqXHR, textStatus, errorThrown){
      console.log(errorThrown)
    })
  },
  updateTopic: function(topic){
    $.ajax({
      url: '/topic',
      type: 'PUT',
      data: JSON.stringify(topic),
      contentType: 'application/json; charset=UTF-8'
    })
    .then(function(data, textStatus, jqXHR){
      console.log(data)
    }, function(jqXHR, textStatus, errorThrown){
      console.log(errorThrown)
    })
  }
}