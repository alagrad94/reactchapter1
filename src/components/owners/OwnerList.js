import React, { Component } from 'react'


class OwnerList  extends Component {
    render() {
        return (
            <section className="owners">
            {
                this.props.owners.map(owner =>
                    <div key={owner.id} className="card">
                        <h5 className="card-title">{`owner: `}{owner.name}<br/>
                        <a href="#"
                            onClick={() => this.props.deleteOwner(owner.id)} className="card-link">Delete</a>
                        </h5>
                    </div>
                )
            }
            </section>
        );
    }
}

export default OwnerList