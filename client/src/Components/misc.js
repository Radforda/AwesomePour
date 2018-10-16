import React, { Component } from "react";
import API from '../utils/api';
import { Link } from "react-router-dom";

class Misc extends Component {
    state = {
        miscDrinks: []
    }


    componentDidMount() {
        this.miscDrinks();

    };

    miscDrinks = () => {
        API.miscDrinks()
            .then(res => this.setState({ miscDrinks: res.data }))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <div className='container drink_div' id='misc'>
                    <p className="favLabel">MISC Drinks</p>
                    <div className='row'>

                        {this.state.miscDrinks.map(miscDrink => (

                            <div className='drink_image col-sm-3'>

                                <Link to={"/detail/" + miscDrink._id}>
                                    <img src={miscDrink.image} ></img>
                                    <p>{miscDrink.title}</p>
                                </Link>
                            </div>

                        ))}
                    </div>
                </div>
            </div>
        )
    }

}

export default Misc;