import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animals/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owners/OwnerList'


class ApplicationViews extends Component {

    employeesFromAPI = [
        { id: 1, name: "Jessica Younker" },
        { id: 2, name: "Jordan Nelson" },
        { id: 3, name: "Zoe LeBlanc" },
        { id: 4, name: "Blaise Roberts" }
    ]

    locationsFromAPI = [
        { id: 1, name: "Nashville North", address: "500 Circle Way" },
        { id: 2, name: "Nashville South", address: "10101 Binary Court" }
    ]

    ownersFromAPI = [
        { id: 1, name: "Ryan Tanay", phone: "123-456-7890"},
        { id: 2, name: "Emma Beaton", phone: "123-456-7890"},
        { id: 3, name: "Dani Adkins", phone: "123-456-7890"},
        { id: 4, name: "Adam Oswalt", phone: "123-456-7890"},
        { id: 5, name: "Fletcher Bangs", phone: "123-456-7890"},
        { id: 6, name: "Angela Lee", phone: "123-456-7890"}
    ]

    animalsFromAPI = [
        { id: 1, name: "Doodles", owner: [1,2]},
        { id: 2, name: "Jack", owner: [3]},
        { id: 3, name: "Angus", owner: [3]},
        { id: 4, name: "Henley", owner: [4,5]},
        { id: 5, name: "Derkins", owner: [5,4]},
        { id: 6, name: "Checkers", owner: [6]}
    ]

    state = {
        employees: this.employeesFromAPI,
        locations: this.locationsFromAPI,
        animals: this.animalsFromAPI,
        owners: this.ownersFromAPI
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals} owners={this.state.owners}/>
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
                <Route path="/owners" render={(props) => {
                    return <OwnerList owners={this.state.owners} />
                }} />
            </React.Fragment>
        )
    }
}

export default ApplicationViews