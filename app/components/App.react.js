/*
This component operates as a 'Controller View'.It listens for changes in the store and pass the new Data 
to its children

React provides the kind of composable views we need for view layer.Close to the top of the nested
view hierarchy, a special kind of view listens for events that are broadcast by the store that it
depends on.One could call this a controller-view.As it provides the glue code to get data from the
stores and to pass this data down the chain of its desendants.We might have one of these controller
views governing any significant section of the page.

When it receives an event from the store, it first requires the new data via the store's public getter
methods.It then calls its own setState() or force update() methods, causing its own render method and 
the render method of all its desendants to run.

We often pass the entire state of the store down the chain of views in a single object,allowing diffent
desendants to use what they need.In addtion to keeping the controller-like behavior at the top of the 
hierarchy, and thus keeping our desendants. 
*/

var React = require('react')

var SideSection = require('./SideSection.react')
var Header = require('./Header.react')
var MainSection = require('./MainSection.react')
var Store = require('../stores/store')

function getState(){
  //每次运行此函数都会得到store里面最新的数据
  return {
    allTopics: Store.getAll(),
    topTopics: Store.getTopTopic()
  }
}
var App = React.createClass({
  getInitialState: function(){
    return getState()
  },
  componentDidMount: function(){
    Store.addChangeListener(this._onChange)
    console.log('componentDidMount')
  },
  componentWillUnmount: function(){
    Store.removeListener(_this._onChange)
  },
  render: function(){
    return (
      <div>
        <Header topTopic={this.state.topTopics.text} topStat={this.state.topTopics.stat} />
        <SideSection allTopics={this.state.allTopics} />
        <MainSection allTopics={this.state.allTopics}/>
      </div>
    )
  },
  _onChange: function(){
    //在AppDispatcher中，每次action之后会更改store里面的数据，之后会调用store.emitChange方法
    //然后emit
    this.setState(
      getState()
    )
  }
})

module.exports = App