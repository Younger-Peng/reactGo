var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

var app = express()

var uristring = process.env.MONGOHQ_URL || 
                process.env.MONGOLAB_URI || 
                'mongodb://localhost/ReactWebpackNode';
mongoose.connect(uristring, function(err, res){
  if(err){
    console.log('error connecting to:' + uristring + ' .' + err)
  }else {
    console.log('Succeeded connected to: ' + uristring )
  }
})
var topicSchema = new mongoose.Schema({
  id: String,
  text: String,
  count: { type: Number, min: 0},
  date: { type: Date, default: Date.now}
})

var TopicModels = mongoose.model('Topics', topicSchema);

app.set('port', (process.env.PORT || 3000));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, '..', 'public')));
// app.get('/', function(request, response){
//   response.send('Hello World')
// })

app.get('/topics', function(request, response){
  TopicModels.find({}).exec(function(err, topics){
    console.log(err)
    if(!err){
      response.json(topics)
    } else {
      console.log('error in first query')
    }
  })
})
app.post('/topic', function(request, response){
  console.log(request.body)
  TopicModels.create(request.body, function(err){
    if(err){
      console.log('Error in save')
    }
  })
})
app.put('/topic', function(request, response){
  var query = { id: request.body.id}
  TopicModels.findOneAndUpdate(query, request.body, function(err, data){
    if(err){
      console.log('Error on save')
      console.log(data)
    }
  })
})
app.listen(app.get('port'), function(){
  console.log('Node app is running at localhost: ' + app.get('port'))
})