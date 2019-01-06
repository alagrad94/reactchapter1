import React, { Component } from 'react'


class LocationList  extends Component {
    render() {
        return (
            <section className="locations">
            {
                this.props.locations.map(location =>
                    <div key={location.id}>
                        {location.name} <br/>
                        {location.address}
                    </div>
                )
            }
            </section>
        );
    }
}
export default LocationList