import React from 'react'
import '../App.css';

import Tasks from './Tasks'
import AddTask from './AddTask'

export default class Filters extends React.Component {
    constructor(props) {
        super(props)
    }



    render() {
        let tasks = this.props.tasks
        let filter = this.props.filter
        let filterTasks = this.props.filterTasks
        let categories = this.props.categories
        let addTask = this.props.addTask
        let remove = this.props.remove
        console.log(tasks)
        
        return (
            <div>
                <div className="categories">
                    <h5>Category Filters</h5>
                    {categories.map((each, index) => <button key={index} onClick={filterTasks} value={each} className={filter === each ? 'selected': null}>{each}</button>)}
                </div>
                <AddTask addTask={addTask} categories={categories}/>
                <div className="tasks">
                    <h5>Tasks</h5>
                    {tasks.map((each, index) => {
                        return (
                            filter === 'All' ? <Tasks key={index} remove={remove} category={each.category} tasks={each.text} /> : each.category === filter ? <Tasks key={index} category={each.category} tasks={each.text} /> : null
                            
                            
                            )
                    })}
                </div>

            </div>
        )
    }


}
