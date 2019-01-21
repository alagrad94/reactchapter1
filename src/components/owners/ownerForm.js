import React, { Component } from "react"
import { Redirect } from 'react-router-dom'

export default class OwnerForm extends Component {
    // Set initial state

    state = {
        ownerName: "",
        phone: "",
        redirectToOwners: false
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
    constructNewOwner = evt => {
        evt.preventDefault()

            const owner = {
                name: `${this.state.ownerName}`,
                phone: `${this.state.phone}`
            }
            // Create the animal and redirect user to animal list
            this.props.addOwner(owner)
            this.setState({redirectToOwners: true})
    }

    render() {
        if (this.state.redirectToOwners) {
            return <Redirect to='/owners' />
        } else {
            return (

                <React.Fragment>
                    <form className="ownerForm,">
                        <div className="form-group">
                            <label htmlFor="ownerName">Owmer name</label>
                            <input type="text" required
                                    className="form-control"
                                    onChange={this.handleFieldChange}
                                    id="ownerName"
                                    placeholder="Owmer name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">phone</label>
                            <input type="text" required
                                    className="form-control"
                                    onChange={this.handleFieldChange}
                                    id="phone" placeholder="Phone" />
                        </div>
                        <button type="submit" onClick={this.constructNewOwner} className="btn btn-primary">Submit</button>
                    </form>
                </React.Fragment>
            )
        }
    }
}