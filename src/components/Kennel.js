import React, { Component } from "react"
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"
import APIManager from '../modules/apiManager'

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

        APIManager.connectToData({dataSet: 'owners', fetchType: 'GET', embedItem: `?q=${this.state.jsonQuery}`})
        .then(owners => {results.ownersResults = owners})
        .then(() => APIManager.connectToData({dataSet: 'animals', fetchType: 'GET', embedItem: `?q=${this.state.jsonQuery}`}))
        .then(animals => {results.animalsResults = animals})
        .then(() => APIManager.connectToData({dataSet: 'locations', fetchType: 'GET', embedItem: `?q=${this.state.jsonQuery}`}))
        .then(locations => {results.locationsResults = locations})
        .then(() => APIManager.connectToData({dataSet: 'employees', fetchType: 'GET', embedItem: `?q=${this.state.jsonQuery}`}))
        .then(employees => {results.employeesResults = employees; this.setState({results: results})})

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