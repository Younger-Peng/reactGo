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
     }, function(jqXHR, data, errorThrow){
       console.log(errorThrow)
     })
  }
}