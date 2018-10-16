import React, {Component} from "react";
import API from '../utils/api';
import { Link } from "react-router-dom";

class Rum extends Component {
    state = {
        rumDrinks: []
    }


    componentDidMount() {
        this.rumDrinks();
        
    };

    rumDrinks = () => {
        API.rumDrinks()
            .then (res => this.setState({ rumDrinks: res.data }))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <div className='container drink_div' id='rum'>
                    <p className="favLabel">Rum Drinks</p>
                    <div className='row'>

                        {this.state.rumDrinks.map(rumDrink => (

                            <div className='drink_image col-sm-3'>

                                <Link to={"/detail/" + rumDrink._id}>
                                    <img src={rumDrink.image} ></img>
                                    <p>{rumDrink.title}</p>
                                </Link>
                            </div>

                        ))}
                    </div>
                </div>
            </div>
        )
    }

}

export default Rum;