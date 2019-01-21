import React, { Component } from "react"
import { Redirect } from 'react-router-dom'


export default class Login extends Component {

    // Set initial state
    state = {
        email: "",
        password: "",
        rememberMe: false
    }

    // Update state whenever an input field is edited
    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    // Simplistic handler for login submit
    handleLogin = (e) => {
        e.preventDefault()

        /*
            For now, just store the email and password that
            the customer enters into local storage.
        */
       if (this.state.rememberMe) {

        localStorage.setItem(
            "credentials",
            JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        )
       } else {

           sessionStorage.setItem(
               "credentials",
               JSON.stringify({
                   email: this.state.email,
                   password: this.state.password
               })
           )
       }

    }

    handleClick(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <form onSubmit={this.handleLogin}>
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <label htmlFor="inputEmail">
                    Email address
                </label>
                <input onChange={this.handleFieldChange} type="email"
                       id="email"
                       placeholder="Email address"
                       required="" autoFocus="" />
                <label htmlFor="inputPassword">
                    Password
                </label>
                <input onChange={this.handleFieldChange} type="password"
                       id="password"
                       placeholder="Password"
                       required="" />
                <button type="submit">
                    Sign in
                </button><br />
                <input id="rememberMe" name="rememberMe" type="checkbox" checked={this.state.rememberMe} onChange={this.handleClick.bind(this)}></input>
                <label for="rememberMe">Remember Me</label>
            </form>
        )
    }
}