import React, { Component } from 'react';

export default class NewTask extends Component{
    constructor(props){
        super()

        this.state = {
            input: ''
        }
        this.addItem = this.addItem.bind(this);
    }

    handleChange(val){
        this.setState({input: val})
    }

    addItem(){
        this.props.add(this.state.input);
        this.setState({input:''});
    }

    render(){
        return(
            <div>
                <input value={this.state.input} placeholder="Enter new item" onChange={e=>this.handleChange(e.target.value)}/>
                <button onClick={()=>this.addItem()}>Add to List</button>
            </div>
        )
    }
}