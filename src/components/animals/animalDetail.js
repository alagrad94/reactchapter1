import React, { Component } from "react"
import { Link, Redirect } from 'react-router-dom'
import "./Animal.css"
import dog from "./DogIcon.png"


export default class AnimalDetail extends Component {

    state = {

        redirectToAnimals: false
    }
    onClick(id){
        this.props.deleteAnimal(id)
        this.setState({redirectToAnimals: true})
    }
    render() {

        const animal = this.props.animals.find(a => a.id === parseInt(this.props.match.params.animalId)) || {}


        if (this.state.redirectToAnimals) {
            return <Redirect to='/animals' />
        } else {

            return (

                <section className="animal">
                    <div key={animal.id} className="card">
                        <div className="card-body">
                            <h4 className="card-title">
                                <img src={dog} className="icon--dog" />
                                {animal.name}
                            </h4>
                            <h6 className="card-title">{animal.breed}</h6>
                            <h6 className="card-title">{`Owner:`}{this.props.location.state.owner}</h6>
                            <h6 className="card-title">{`Caretaker:`}{this.props.location.state.employee}</h6>
                            <a href="#"
                                onClick={() => this.onClick(animal.id)}
                                className="card-link">Delete</a>
                            <div className="animalButton">
                            <Link to={{pathname:"/animals/edit/", state:{id: animal.id, name: animal.name, breed: animal.breed, employee: this.props.location.state.employee, owner: this.props.location.state.owner}}}>
                                <button type="button"
                                        className="btn btn-success">
                                    Edit Animal
                                </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            )
        }
    }
}
