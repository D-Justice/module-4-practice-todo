import React from 'react'
import '../App.css';



export default class AddTask extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            category: 'Code'
        }
    }


    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        
        this.props.addTask(this.state)
    }
    handleChangeOption = (e) => {
        
        this.setState({
            category: e.target.value
        })
    }
    render() {
        let categories = this.props.categories
        
        
        return (
            <div>
                <form onSubmit={this.handleSubmit} className='new-task-form'>
                    <input name='text' onChange={this.handleChange} type='text' placeholder='New task details'></input>
                    <select onChange={this.handleChangeOption} >
                        {categories.map((each, index) => each === 'All' ? null : <option key={index} value={each}>{each}</option>)}
                    </select>
                    <input type='submit' value='Add Task'></input>
                </form>

            </div>
        )
    }


}
