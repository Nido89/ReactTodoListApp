import React, { Component } from 'react';
import Navbar from './components/Navbar'
import Todos from './components/Todos'

import './App.css';

class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      todos:[
        {
          id:0,
          content:"Todo 1",
          done: true
        },
        {
          id:1,
          content:"Todo 2",
          done: false
        }
      ]
    }
  }

  addTodo = content => {
    let todos= this.state.todos;
    todos.push({id:todos.length,content:content,done:false});
    this.setState({todos:todos});
  }

  toggleDone = (id) => {
   this.setState({todos:this.state.todos.map(todo =>{
     if(todo.id=== id){
       todo.done = !todo.done;
     }
     return todo;
   })})

  }
  removeTodo= (id) =>{
    this.setState({
      todos:this.state.todos.filter(todo=>todo.id !==id)
    })
  }
render(){
  return (
    <div>
      <Navbar addTodo={this.addTodo}/>
      <Todos todos={this.state.todos} toggleDone={this.toggleDone} removeTodo={this.removeTodo}/>
    </div>
  );
} 
}

export default App;
