import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
                    </div>
                )
            }
            </section>
        );
    }
}
export default LocationList