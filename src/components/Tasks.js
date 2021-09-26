import React from 'react'
import '../App.css';



export default class Filters extends React.Component {
    constructor(props) {
        super(props)
    }



    render() {


        return (
            <div className="task">
                <div className="label">{this.props.category}</div>
                <div className="text">{this.props.tasks}</div>
                <button className='delete' onClick={() => this.props.remove(this.props.tasks)}>X</button>
                
            </div>
        )
    }


}
