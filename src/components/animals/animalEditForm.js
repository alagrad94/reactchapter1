import React, { Component } from "react"
import { Redirect } from 'react-router-dom'
import "./Animal.css"

export default class AnimalEditForm extends Component {
    // Set initial state

    state = {
        id: this.props.location.state.id,
        animalName: this.props.location.state.name,
        breed: this.props.location.state.breed,
        employee: this.props.location.state.employee,
        owner: this.props.location.state.owner,
        redirectToAnimalDetails: false
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    /*
        Local method for validation, creating animal object, and
        invoking the function reference passed from parent component
     */
    constructEditedAnimal = evt => {
        evt.preventDefault()
        if (this.state.employee === "") {
            window.alert("Please select a caretaker")
        } else if (this.state.owner === "") {
            window.alert("Please select an owner")
        } else {
            const animal = {
                id: this.state.id,
                name: `${this.state.animalName}`,
                breed: `${this.state.breed}`,
                employeeId: this.props.employees.find(e => e.name === this.state.employee).id,
                owner: [this.props.owners.find(e => e.name === this.state.owner).id]
            }

            // Create the animal and redirect user to animal list
            this.props.editAnimal(animal)
            this.setState({redirectToAnimalDetails: true})
        }
    }

    render() {
        if (this.state.redirectToAnimalDetails) {

            return <Redirect to={{pathname: `/animals/${this.state.id}`, state:{owner: this.state.owner, id: this.state.id, employee: this.state.employee}}} />
        } else {


            return (
                <React.Fragment>
                    <form className="animalForm">
                        <div className="form-group">
                            <label htmlFor="animalName">Animal name</label>
                            <input type="text" required
                                    className="form-control"
                                    onChange={this.handleFieldChange}
                                    id="animalName"
                                    placeholder={`${this.state.animalName}`} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="breed">Breed</label>
                            <input type="text" required
                                    className="form-control"
                                    onChange={this.handleFieldChange}
                                    id="breed" placeholder={`${this.state.breed}`} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="employee">Assign to caretaker</label>
                            <select defaultValue="" name="employee" id="employee"
                                    onChange={this.handleFieldChange}>
                                <option value="">{`${this.state.employee}`}</option>
                            {
                                this.props.employees.map(e => <option key={e.id} id={e.id}>{e.name}</option>)
                            }
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="owner">Select an Owner</label>
                            <select defaultValue="" name="owner" id="owner"
                                    onChange={this.handleFieldChange}>
                                <option value="">{`${this.state.owner}`}</option>
                            {
                                this.props.owners.map(e => <option key={e.id} id={e.id}>{e.name}</option>)
                            }
                            </select>
                        </div>
                        <button type="submit" onClick={this.constructEditedAnimal} className="btn btn-primary">Submit</button>
                    </form>
                </React.Fragment>
            )
        }
    }
}