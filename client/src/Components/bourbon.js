import React, { Component } from "react";
import API from '../utils/api';
import { Link } from "react-router-dom";

class Bourbon extends Component {
    state = {
        bourbonDrinks: []
    }


    componentDidMount() {
        this.bourbonDrinks();

    };

    bourbonDrinks = () => {
        API.bourbonDrinks()
            .then(res => this.setState({ bourbonDrinks: res.data }))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <div className='container drink_div' id="bourbon">
                    <p className="favLabel">Bourbon Drinks</p>
                    <div className='row'>

                        {this.state.bourbonDrinks.map(bourbonDrink => (

                            <div className='drink_image col-sm-3'>

                                <Link to={"/detail/" + bourbonDrink._id}>
                                    <img src={bourbonDrink.image} ></img>
                                    <p>{bourbonDrink.title}</p>
                                </Link>
                            </div>

                        ))}
                    </div>
                </div>
            </div>
        )
    }

}

export default Bourbon;