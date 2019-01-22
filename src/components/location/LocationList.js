import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import EmployeeCard from '../employee/employeeCard';

class LocationList  extends Component {
    render() {
        return (
            <section className="locations">
            {
                this.props.locations.map(location =>
                    <div key={location.id}>
                        {`Location: `}{location.name} <br/>
                        {`Address: `}{location.address}
                        <Link className="nav-link" to={`/locations/${location.id}`}>Details</Link>

                    <h6 className="card-subtitle mb-2 text-muted">Works Here</h6>
                            <div className="locations--employee">
                            {
                                this.props.employees
                                    .filter(employee => employee.locationId === location.id)
                                    .map(employee => <EmployeeCard key={employee.id} employee={employee} {...this.props} />)
                            }
                            </div>
                    </div>
                )
            }
            </section>
        );
    }
}
export default LocationList