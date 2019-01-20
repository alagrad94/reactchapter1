import React, { Component } from 'react'
import dog from "./DogIcon.png"
import "./Animal.css"



export default class AnimalList  extends Component {


    render() {

        this.props.animals.map(animal => {

            animal.ownerNames = "";
            console.log(this.props.owners[0])
            animal.owner.map(names => {

                let number = names - 1
                if (animal.ownerNames === "") {

                    animal.ownerNames = this.props.owners[number].name
                } else {

                    animal.ownerNames += `, ${this.props.owners[number].name}`

                }
                console.log(animal.ownerNames)
                return animal.ownerNames
            })

        })

        return (
            <section className="animals">
            {
                this.props.animals.map(animal =>
                    <div key={animal.id} className="card">
                        <h5 className="card-title">{`Name:`} {animal.name} <br/>
                        {`Owners:`} {animal.ownerNames}
                            <img src={dog} className="icon--dog"/>
                            {animal.name}
                            <a href="#"
                                onClick={() => this.props.deleteAnimal(animal.id)} className="card-link">Delete</a>
                        </h5>
                    </div>
                )
            }
            </section>
        );
    }
}