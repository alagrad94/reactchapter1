import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animals/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owners/OwnerList'
import SearchResults from './nav/SearchResults';

export default class ApplicationViews extends Component {

    constructor() {
        super();
        this.state = {

                animals: [],
                employees: [],
                locations: [],
                owners: []
            }

        this.deleteAnimal = this.deleteAnimal.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this)
    }

    deleteAnimal = id => {
        return fetch(`http://localhost:5002/animals/${id}`, {
            method: "DELETE"
        })
        .then(e => e.json())
        .then(() => fetch(`http://localhost:5002/animals`))
        .then(e => e.json())
        .then(animals => this.setState({
            animals: animals
        })
      )
    }

    deleteEmployee = id => {
        return fetch(`http://localhost:5002/employees/${id}`, {
            method: "DELETE"
        })
        .then(e => e.json())
        .then(() => fetch(`http://localhost:5002/employees`))
        .then(e => e.json())
        .then(employees => this.setState({
            employees: employees
        })
      )
    }

    deleteOwner = id => {
        return fetch(`http://localhost:5002/owners/${id}`, {
            method: "DELETE"
        })
        .then(e => e.json())
        .then(() => fetch(`http://localhost:5002/owners`))
        .then(e => e.json())
        .then(owners => this.setState({
            owners: owners
        })
      )
    }
    componentDidMount() {

        fetch("http://localhost:5002/owners")
            .then(r => r.json())
            .then(owners => {this.setState({owners: owners})})
            .then(() => fetch("http://localhost:5002/locations")
            .then(r => r.json()))
            .then(locations => {this.setState({locations: locations})})
            .then(() => fetch("http://localhost:5002/employees")
            .then(r => r.json()))
            .then(employees => {this.setState({employees: employees})})
            .then(() => fetch("http://localhost:5002/animals")
            .then(r => r.json()))
            .then(animals => {this.setState({animals: animals})})
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route path="/animals" render={(props) => {
                    return <AnimalList deleteAnimal={this.deleteAnimal} animals={this.state.animals} owners={this.state.owners}/>
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList deleteEmployee={this.deleteEmployee} employees={this.state.employees} />
                }} />
                <Route path="/owners" render={(props) => {
                    return <OwnerList deleteOwner={this.deleteOwner} owners={this.state.owners} />
                }} />
                <Route path="/searchresults" render={(props) => {
                    return <SearchResults jsonQuery={this.props.jsonQuery} results={this.props.results} handleInputChange={this.props.handleInputChange}/>
                }} />
            </React.Fragment>
        )
    }
}