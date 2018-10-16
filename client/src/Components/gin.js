import React, { Component } from "react";
import API from '../utils/api';
import { Link } from "react-router-dom";

class Gin extends Component {
    state = {
        ginDrinks: []
    }


    componentDidMount() {
        this.ginDrinks();

    };

    ginDrinks = () => {
        API.ginDrinks()
            .then(res => this.setState({ ginDrinks: res.data }))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <div className='container drink_div' id='gin'>
                    <p className="favLabel">Gin Drinks</p>
                    <div className='row'>

                        {this.state.ginDrinks.map(ginDrink => (

                            <div className='drink_image col-sm-3'>

                                <Link to={"/detail/" + ginDrink._id}>
                                    <img src={ginDrink.image} ></img>
                                    <p>{ginDrink.title}</p>
                                </Link>
                            </div>

                        ))}
                    </div>
                </div>
            </div>
        )
            }
        
        }
        
export default Gin;