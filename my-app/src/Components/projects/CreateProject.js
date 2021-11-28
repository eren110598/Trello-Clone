
import React, { Component } from 'react'

class CreateProject extends Component {
    state={
    title:'',
    content:''
    }

    handleChange = (e) => {
        
        this.setState({
        [e.target.id]:e.target.value
        });
    }

    handleSubmit = (e) =>{
       
        e.preventDefault();
        

    }
    render() {
        return (
            <div className="container">
            <form onSubmit={this.handleSubmit} className="grey lighten-3">
                <h5 className="black-text">Create Project</h5>
                <div className="input-field">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" onChange={this.handleChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="content">Content</label>
                    <input type="text" id="content" onChange={this.handleChange}/>
                </div>
            
                <div className="input-field">
                    <button className="btn pink lighten-1">Create Project</button>
                </div>
            </form>
                
            </div>
        )
    }
}

export default CreateProject
