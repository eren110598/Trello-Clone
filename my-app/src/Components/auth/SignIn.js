import React, { Component } from 'react'

class SignIn extends Component {
    state={
    email:'',
    pass:''
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
                <h5 className="black-text">Sign-In</h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={this.handleChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="pass">Password</label>
                    <input type="password" id="pass" onChange={this.handleChange}/>
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1">Login</button>
                </div>
            </form>
                
            </div>
        )
    }
}

export default SignIn
