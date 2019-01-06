import React, { Component } from 'react';
import EmployeeList from "./employee/EmployeeList";  // Import EmployeeList component
import LocationList from "./location/LocationList"; // Import LocationList component
import AnimalList from './AnimalList/AnimalList'; // Import AnimalList component
import "./Kennel.css";

class Kennel extends Component {

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
        { id: 1, name: "Ryan Tanay" },
        { id: 2, name: "Emma Beaton" },
        { id: 3, name: "Dani Adkins" },
        { id: 4, name: "Adam Oswalt" },
        { id: 5, name: "Fletcher Bangs"},
        { id: 6, name: "Angela Lee" }
    ]

    animalsFromAPI = [
        { id: 1, name: "Boomer", owner: [1,2]},
        { id: 2, name: "Mick", owner: [2,1]},
        { id: 3, name: "Sully", owner: [5]},
        { id: 4, name: "Heilo", owner: [4,6]}
    ]

    state = {
        owners: this.ownersFromAPI,
        employees: this.employeesFromAPI,
        locations: this.locationsFromAPI,
        animals: this.animalsFromAPI,
    }

        render() {
            return (
                <div>
                    <article className="kennel">
                    <LocationList locations={this.state.locations} />
                    <EmployeeList employees={this.state.employees} />
                    <AnimalList animals={this.state.animals} owners={this.state.owners} />
                    </article>
                </div>
            );
        }
}

export default Kennel
