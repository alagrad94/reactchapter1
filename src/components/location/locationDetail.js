import React, { Component } from "react"


export default class LocationDetail extends Component {
    render() {

        const location = this.props.locations.find(a => a.id === parseInt(this.props.match.params.locationId)) || {}
        console.log(location)
        return (
            <section className="location">
                <div key={location.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            {location.name} <br />
                            {location.address}
                        </h4>
                    </div>
                </div>
            </section>
        )
    }
}
