import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animals/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owners/OwnerList'
import SearchResults from './nav/SearchResults';
import APIManager from "../modules/apiManager";

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
        APIManager.connectToData({dataSet: 'animals', fetchType: 'DELETE', deleteId: id})
        .then(() => APIManager.connectToData({dataSet: 'animals', fetchType: 'GET', embedItem: ""}))
        .then(animals => {this.setState({animals: animals})})
    }

    deleteEmployee = id => {
        APIManager.connectToData({dataSet: 'employees', fetchType: 'DELETE', deleteId: id})
        .then(() => APIManager.connectToData({dataSet: 'employees', fetchType: 'GET', embedItem: ""}))
        .then(employees => {this.setState({employees: employees})})
    }

    deleteOwner = id => {

        APIManager.connectToData({dataSet: 'owners', fetchType: 'DELETE', deleteId: id})
        .then(() => APIManager.connectToData({dataSet: 'owners', fetchType: 'GET', embedItem: ""}))
        .then(owners => {this.setState({owners: owners})})

    }
    componentDidMount() {

        APIManager.connectToData({dataSet: 'owners', fetchType: 'GET', embedItem: ""})
        .then(owners => {this.setState({owners: owners})})
        .then(() => APIManager.connectToData({dataSet: 'animals', fetchType: 'GET', embedItem: ""}))
        .then(animals => {this.setState({animals: animals})})
        .then(() => APIManager.connectToData({dataSet: 'locations', fetchType: 'GET', embedItem: ""}))
        .then(locations => {this.setState({locations: locations})})
        .then(() => APIManager.connectToData({dataSet: 'employees', fetchType: 'GET', embedItem: ""}))
        .then(employees => {this.setState({employees: employees})})
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals} owners={this.state.owners} deleteAnimal={this.deleteAnimal} />
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