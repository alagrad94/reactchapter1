import React, { Component } from 'react'
import EmployeeList from "./employee/EmployeeList"  // Import EmployeeList component
import LocationList from "./location/LocationList"  // Import EmployeeList component


export default class Kennel extends Component {
    render() {
        return (
            <div>
                <h1>Student Kennels</h1>
                <LocationList />
                <EmployeeList />
            </div>
        );
    }
}