import React, { Component } from "react"
import { Link } from "react-router-dom"

export default class EmployeeCard extends Component {
    render() {
        return (
            <div key={this.props.employee.id} className="card">
                <div className="card-body">
                    <h5 className="card-title">
                        {this.props.employee.name}
                        <Link className="nav-link" to={{pathname: `/employees/${this.props.employee.id}`, state:{id: this.props.employee.id, employee: this.props.employee.name}}}>Details</Link>
                        <a href="#"
                            onClick={() => this.props.deleteEmployee(this.props.employee.id)}
                            className="card-link">Fire Employee</a>
                    </h5>
                </div>
            </div>
        )
    }
}