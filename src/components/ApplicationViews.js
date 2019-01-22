import { Route, Redirect } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animals/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owners/OwnerList'
import SearchResults from './nav/SearchResults';
import APIManager from "../modules/apiManager";
import AnimalDetail from './animals/animalDetail';
import LocationDetail from './location/locationDetail';
import EmployeeDetail from './employee/employeeDetail';
import OwnerDetail from './owners/ownerDetail';
import AnimalForm from './animals/animalForm';
import OwnerForm from './owners/ownerForm';
import EmployeeForm from './employee/employeeForm';
import AnimalEditForm from './animals/animalEditForm';
import Login from './authentication/login'

export default class ApplicationViews extends Component {

    constructor() {
        super();
        this.state = {

                animals: [],
                employees: [],
                locations: [],
                owners: [],
            }

        this.deleteAnimal = this.deleteAnimal.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
        this.deleteEmployee = this.deleteOwner.bind(this);
        this.addAnimal = this.addAnimal.bind(this);
        this.addOwner = this.addOwner.bind(this);
        this.addEmployee = this.addEmployee.bind(this)
        this.editAnimal = this.editAnimal.bind(this)
        this.isAuthenticated = this.isAuthenticated.bind(this)
    }

    deleteAnimal = id => {

        APIManager.connectToData({dataSet: 'animals', fetchType: 'DELETE', deleteId: id})
        .then(() => APIManager.connectToData({dataSet: 'animals', fetchType: 'GET', embedItem: "?_expand=employee"}))
        .then(animals => {this.setState({animals: animals})})
    }

    addAnimal (newAnimal) {
        APIManager.connectToData({dataSet: "animals", fetchType: "POST", dataBaseObject: newAnimal})
        .then(() => APIManager.connectToData({dataSet: 'animals', fetchType: 'GET', embedItem: "?_expand=employee"}))
        .then(animals => {this.setState({animals: animals})})
    }

    editAnimal(animal) {
        console.log(animal)
        APIManager.connectToData({dataSet: "animals", fetchType: "PUT", dataBaseObject: animal, putId: animal.id})
        .then(() => APIManager.connectToData({dataSet: 'animals', fetchType: 'GET', embedItem: "?_expand=employee"}))
        .then(animals => {this.setState({animals: animals})})
    }
    addEmployee (newEmployee) {
        console.log(newEmployee)
        APIManager.connectToData({dataSet: "employees", fetchType: "POST", dataBaseObject: newEmployee})
        .then(() => APIManager.connectToData({dataSet: 'employees', fetchType: 'GET', embedItem: ""}))
        .then(employees => {this.setState({employees: employees})})
    }
    deleteEmployee = id => {
        APIManager.connectToData({dataSet: 'employees', fetchType: 'DELETE', deleteId: id})
        .then(() => APIManager.connectToData({dataSet: 'employees', fetchType: 'GET', embedItem: ""}))
        .then(employees => {this.setState({employees: employees})})
    }

    addOwner (newOwner) {
        APIManager.connectToData({dataSet: "owners", fetchType: "POST", dataBaseObject: newOwner})
        .then(() => APIManager.connectToData({dataSet: 'owners', fetchType: 'GET', embedItem: ""}))
        .then(owners => {this.setState({owners: owners})})
    }
    deleteOwner = id => {

        APIManager.connectToData({dataSet: 'owners', fetchType: 'DELETE', deleteId: id})
        .then(() => APIManager.connectToData({dataSet: 'owners', fetchType: 'GET', embedItem: ""}))
        .then(owners => {this.setState({owners: owners})})

    }

    isAuthenticated = () => sessionStorage.getItem("credentials") !== null

    componentDidMount() {

        APIManager.connectToData({dataSet: 'owners', fetchType: 'GET', embedItem: ""})
        .then(owners => {this.setState({owners: owners})})
        .then(() => APIManager.connectToData({dataSet: 'animals', fetchType: 'GET', embedItem: "?_expand=employee"}))
        .then(animals => {this.setState({animals: animals})})
        .then(() => APIManager.connectToData({dataSet: 'locations', fetchType: 'GET', embedItem: ""}))
        .then(locations => {this.setState({locations: locations})})
        .then(() => APIManager.connectToData({dataSet: 'employees', fetchType: 'GET', embedItem: ""}))
        .then(employees => {this.setState({employees: employees})})
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={props => {
                    if (this.isAuthenticated()) {
                    return <LocationList locations={this.state.locations} employees={this.state.employees} animals={this.state.animals} owners={this.state.owners} />
                    } else {
                        return <Redirect to='/login' />
                    }}} />
                <Route path="/locations/:locationId(\d+)" render={(props) => {
                    return <LocationDetail {...props} locations={this.state.locations} />}} />
                <Route exact path="/animals" render={props => {
                    if (this.isAuthenticated()) {
                    return <AnimalList animals={this.state.animals} owners={this.state.owners} employees={this.state.employees} deleteAnimal={this.deleteAnimal} />} else {
                        return <Redirect to='/login' />
                    }}} />
                 <Route path="/animals/new" render={(props) => {
                    return <AnimalForm {...props} addAnimal={this.addAnimal} employees={this.state.employees} owners={this.state.owners}/>}} />
                <Route path="/animals/:animalId(\d+)" render={(props) => {
                    return <AnimalDetail {...props} deleteAnimal={this.deleteAnimal} animals={this.state.animals} employees={this.state.employees} owners={this.state.owners}/>}} />
                <Route path="/animals/edit/" render={(props) => {
                    return <AnimalEditForm {...props} editAnimal={this.editAnimal} animals={this.state.animals} employees={this.state.employees} owners={this.state.owners}/>}} />
                <Route exact path="/employees" render={props => {
                    if (this.isAuthenticated()) {
                        return <EmployeeList deleteEmployee={this.deleteEmployee} employees={this.state.employees} animals={this.state.animals} />
                    } else {
                       return <Redirect to='/login' />
                    }}}/>
                <Route path="/employees/:employeeId(\d+)" render={(props) => {
                    return <EmployeeDetail {...props} deleteEmployee={this.deleteEmployee} employees={this.state.employees} />}} />
                <Route path="/employees/new" render={(props) => {
                    return <EmployeeForm {...props} addEmployee={this.addEmployee} employees={this.state.employees}/>}} />
                <Route exact path="/owners" render={props => {
                    if (this.isAuthenticated()) {
                    return <OwnerList deleteOwner={this.deleteOwner} owners={this.state.owners} />
                    } else {
                        return <Redirect to='/login' />
                     }}} />
                <Route path="/owners/new" render={(props) => {
                    return <OwnerForm {...props} addOwner={this.addOwner} owners={this.state.owners}/>}} />
                <Route path="/owners/:ownerId(\d+)" render={(props) => {
                    return <OwnerDetail {...props} deleteOwner={this.deleteOwner} owners={this.state.owners} />}} />
                <Route exact path="/searchresults" render={(props) => {
                    return <SearchResults jsonQuery={this.props.jsonQuery} results={this.props.results} handleInputChange={this.props.handleInputChange}/>}} />
                <Route path="/login" component={Login}/>
            </React.Fragment>
        )
    }
}