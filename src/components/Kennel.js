import React, { Component } from "react"
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"

import "./Kennel.css"
import "bootstrap/dist/css/bootstrap.min.css"


class Kennel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            jsonQuery: '',
            results: {
                ownersResults: [],
                animalsResults: [],
                employeesResults: [],
                locationsResults: []
            }
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.getInfo = this.getInfo.bind(this)
    }

    handleInputChange = (e) => {
        this.setState({
            jsonQuery: e.target.value

        }, () => {
            if (this.state.jsonQuery && this.state.jsonQuery.length >1) {

                this.getInfo();
            }
        })
    }

    getInfo () {
        let results = {
            ownersResults: [],
            animalsResults: [],
            employeesResults: [],
            locationsResults: []
        }

        fetch(`http://localhost:5002/owners?q=${this.state.jsonQuery}`)
            .then(r => r.json())
            .then(owners => {results.ownersResults = owners})
            .then(() => fetch(`http://localhost:5002/locations?q=${this.state.jsonQuery}`)
            .then(r => r.json()))
            .then(locations => {results.locationsResults = locations})
            .then(() => fetch(`http://localhost:5002/employees?q=${this.state.jsonQuery}`)
            .then(r => r.json()))
            .then(employees => {results.employeesResults = employees})
            .then(() => fetch(`http://localhost:5002/animals?q=${this.state.jsonQuery}`)
            .then(r => r.json()))
            .then(animals => {results.animalsResults = animals; this.setState({results: results})})

    }

    render() {
        return (
            <React.Fragment>
                <NavBar jsonQuery={this.state.jsonQuery} results={this.state.results} handleInputChange={this.handleInputChange}/>
                <ApplicationViews jsonQuery={this.state.jsonQuery} results={this.state.results} handleInputChange={this.handleInputChange}/>
            </React.Fragment>
        )
    }
}
export default Kennel