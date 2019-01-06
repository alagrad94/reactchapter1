import React, { Component } from 'react'

class AnimalList  extends Component {


    render() {


        let ownerInfo = []; //Create array

        this.props.owners.map(owner => {

            ownerInfo.push(owner)
            console.log(owner)
            return ownerInfo
        })

        this.props.animals.map(animal => {

            let namesArray = []

            animal.owner.map(names => {

                let number = names - 1

                namesArray.push(ownerInfo[number].name)
                return namesArray
            })

            animal.ownerNames = namesArray.join(", ")

        })

        return (
            <section className="animals">
            {
                this.props.animals.map(animal =>
                    <div key={animal.id}>
                        {`Name:`} {animal.name} <br/>
                        {`Owners:`} {animal.ownerNames}
                    </div>
                )
            }
            </section>
        );
    }
}

export default AnimalList