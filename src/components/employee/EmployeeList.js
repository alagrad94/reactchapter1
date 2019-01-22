import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import AnimalCard from '../animals/animalCard'


class EmployeeList  extends Component {
    render() {
        return (
            <React.Fragment>
            <Link to='/employees/new'>
            <div className="employeeButton">
                <button type="button"
                        className="btn btn-success"
                        onClick={<Redirect to="/employees/new"></Redirect>
                        }>
                    Add Employee
                </button>
            </div>
            </Link>
            <section className="employees">
            {
                this.props.employees.map(employee =>
                    <div key={employee.id} className="card">
                        <h5 className="card-title">{`Employee: `}{employee.name}<br/>
                        <Link className="nav-link" to={`/employees/${employee.id}`}>Details</Link>
                        <a href="#"
                            onClick={() => this.props.deleteEmployee(employee.id)} className="card-link">Delete</a>
                        </h5>
                        <h6 className="card-subtitle mb-2 text-muted">Caretaker For</h6>
                            <div className="animals--caretaker">
                            {
                                this.props.animals
                                    .filter(anml => anml.employeeId === employee.id)
                                    .map(anml => <AnimalCard key={anml.id} animal={anml} {...this.props} />)
                            }
                            </div>
                    </div>
                )
            }
            </section>
            </React.Fragment>
        );
    }
}

export default EmployeeList