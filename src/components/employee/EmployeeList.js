import React, { Component } from 'react'


class EmployeeList  extends Component {
    render() {
        return (
            <section className="employees">
            {
                this.props.employees.map(employee =>
                    <div key={employee.id} className="card">
                        <h5 className="card-title">{`Employee: `}{employee.name}<br/>
                        <a href="#"
                            onClick={() => this.props.deleteEmployee(employee.id)} className="card-link">Delete</a>
                        </h5>
                    </div>
                )
            }
            </section>
        );
    }
}

export default EmployeeList