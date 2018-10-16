import React, { Component } from "react";
import API from '../utils/api';
import { Link } from "react-router-dom";

class Champagne extends Component {
    state = {
        champagneDrinks: []
    }


    componentDidMount() {
        this.champagneDrinks();

    };

    champagneDrinks = () => {
        API.champagneDrinks()
            .then(res => this.setState({ champagneDrinks: res.data }))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <div className='container drink_div' id="champagne">
                    <p className="favLabel">Champagne Drinks</p>
                    <div className='row'>

                        {this.state.champagneDrinks.map(champagneDrink => (

                            <div className='drink_image col-sm-3'>

                                <Link to={"/detail/" + champagneDrink._id}>
                                    <img src={champagneDrink.image} ></img>
                                    <p>{champagneDrink.title}</p>
                                </Link>
                            </div>

                        ))}
                    </div>
                </div>
            </div>
        )
    }

}

export default Champagne;