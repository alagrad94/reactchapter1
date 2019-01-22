import React, { Component } from 'react'
import dog from "./DogIcon.png"
import "./Animal.css"
import { Link, Redirect } from 'react-router-dom'
import AnimalCard from './animalCard'



export default class AnimalList  extends Component {

    render() {

        this.props.animals.map(animal => {

            let validOwners = [];
            animal.ownerNames = "";
            this.props.owners.forEach(owner => {
                validOwners.push(owner.id)
            });

            animal.owner.map(ownerId => {

                let number = ownerId - 1

                if (validOwners.includes(ownerId)) {


                    (animal.ownerNames === "") ? animal.ownerNames = this.props.owners[number].name : animal.ownerNames += `, ${this.props.owners[number].name}`

                } else {
                    animal.ownerNames = '';
                }

                return animal.ownerNames
            })

        })

        return (
            <React.Fragment>
                <Link to='/animals/new'>
                <div className="animalButton">
                    <button type="button"
                            className="btn btn-success"
                            onClick={<Redirect to="/animals/new"></Redirect>
                            }>
                        Admit Animal
                    </button>
                </div>
                </Link>
            <section className="animals">
            {
                this.props.animals.map(animal =>
                    <AnimalCard key={animal.id} animal={animal} {...this.props} />
                )
                // this.props.animals.map(animal =>
                //     <div key={animal.id} className="card">
                //         <h5 className="card-title">{`Name:`} {animal.name} <br/>
                //         <h6 className="card-title">{`Owner:`}{animal.ownerNames}</h6>
                //         <h6 className="card-title">{`Caretaker:`}{animal.employee.name}</h6>
                //             <img src={dog} className="icon--dog"/>
                //             {animal.name}
                //             <Link className="nav-link" to={{pathname: `/animals/${animal.id}`, state:{owner: animal.ownerNames, id: animal.id, employee: animal.employee.name}}}>Details</Link>
                //             <a href="#"
                //                 onClick={() => this.props.deleteAnimal(animal.id)} className="card-link">Delete</a>
                //         </h5>
                //     </div>
                // )
            }
            </section>
            </React.Fragment>
        );
    }
}