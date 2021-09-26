import React from 'react';
import './App.css';
import Filters from './components/Filters'
import { CATEGORIES } from './data'

class App extends React.Component {

  state = {
    tasks: [
      {
        text: 'Buy rice',
        category: 'Food'
      },
      {
        text: 'Save a tenner',
        category: 'Money'
      },
      {
        text: 'Build a todo app',
        category: 'Code'
      },
      {
        text: 'Build todo API',
        category: 'Code'
      },
      {
        text: 'Get an ISA',
        category: 'Money'
      },
      {
        text: 'Cook rice',
        category: 'Food'
      },
      {
        text: 'Tidy house',
        category: 'Misc'
      }
    ],
    filter: 'All'
  }
  filterTasks = (e) => {
    this.setState({filter: e.target.value})
  }
  addTask = (task) => {
    console.log(task)
    this.setState({
      
      tasks: [...this.state.tasks, task]
    },() => console.log(this.state))
  }
  remove = (task) => {
    console.log(task)
    let test = this.state.tasks
    let newArray=test.filter((each, index) => {
      if(each.text === task) {}
      else {return each}
    })
    this.setState({
      tasks: newArray
    })
    
  }
  render() {
    return (
      <div className="App">
        <h2>My tasks</h2>
        <Filters remove={this.remove} addTask={this.addTask} tasks={this.state.tasks} filterTasks={this.filterTasks} filter={this.state.filter} categories={CATEGORIES} />
      </div>
    );
  }
}


export default App;
