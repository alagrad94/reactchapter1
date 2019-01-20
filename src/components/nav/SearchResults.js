import React, { Component } from 'react'

export default class SearchResults extends Component {

    render () {
        let employeeElement;
        let ownerElement;
        let locationElement;
        let animalElement;

        if (this.props.results.employeesResults.length > 0) {
            employeeElement =
            <div className="employeeResults" style={{border:'1px', borderColor: 'black', padding: '5px'}}>
            <h3>MATCHING EMPLOYEES</h3>
                {
                this.props.results.employeesResults.map(employee =>
                    <div key={employee.id}>
                        {`Employee: `}{employee.name}
                    </div>
                    )
                }
            </div>
        }

        if (this.props.results.locationsResults.length > 0) {
           locationElement =
            <div className="locationResults" style={{border:'1px', borderColor: 'black', padding: '5px'}}>
            <h3>MATCHING LOCATIONS</h3>
                {
                this.props.results.locationsResults.map(location =>
                    <div key={location.id}>
                        {`Location: `}{location.name}
                        {`Address:`}{location.address}
                    </div>
                    )
                }
            </div>
            }

        if (this.props.results.ownersResults.length > 0) {
            ownerElement =
            <div className="ownerResults" style={{border:'1px', borderColor: 'black', padding: '5px'}}>
            <h3>MATCHING OWNERS</h3>
                {
                this.props.results.ownersResults.map(owner =>
                    <div key={owner.id}>
                        {`Owner: `}{owner.name}
                    </div>
                    )
                }
            </div>
        }

        if (this.props.results.animalsResults.length > 0) {
            animalElement =
            <div className="animalResults" style={{border:'1px', borderColor: 'black', padding: '5px'}}>
            <h3>MATCHING ANIMALS</h3>
                {
                this.props.results.animalsResults.map(animal =>
                    <div key={animal.id}>
                        {`Animal: `}{animal.name}
                    </div>
                    )
                }
            </div>
        }

        return (
            <section className="searchResults">

                { employeeElement }
                { ownerElement }
                { locationElement }
                { animalElement }

            </section>
        )
    }
}