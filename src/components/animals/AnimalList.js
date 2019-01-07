import React, { Component } from 'react'

class AnimalList  extends Component {


    render() {

        this.props.animals.map(animal => {

            animal.ownerNames = "";

            animal.owner.map(names => {

                let number = names - 1
                if (animal.ownerNames === "") {


                    animal.ownerNames = this.props.owners[number].name
                } else {

                    animal.ownerNames += `, ${this.props.owners[number].name}`

                }
                return animal.ownerNames
            })

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