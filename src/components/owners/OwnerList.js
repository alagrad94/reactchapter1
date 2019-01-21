import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'

class OwnerList  extends Component {
    render() {
        return (
            <React.Fragment>
            <Link to='/owners/new'>
            <div className="ownerButton">
                <button type="button"
                        className="btn btn-success"
                        onClick={<Redirect to="/owners/new"></Redirect>
                        }>
                    Add Owner
                </button>
            </div>
            </Link>
            <section className="owners">
            {
                this.props.owners.map(owner =>
                    <div key={owner.id} className="card">
                        <h5 className="card-title">{`owner: `}{owner.name}<br/>
                        <Link className="nav-link" to={`/owners/${owner.id}`}>Details</Link>
                        <a href="#"
                            onClick={() => this.props.deleteOwner(owner.id)} className="card-link">Delete</a>
                        </h5>
                    </div>
                )
            }
            </section>
            </React.Fragment>
        );
    }
}

export default OwnerList