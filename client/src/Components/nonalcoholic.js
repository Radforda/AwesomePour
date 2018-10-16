import React, {Component} from "react";
import API from '../utils/api';
import { Link } from "react-router-dom";

class Nonalcoholic extends Component {
    state = {
        nonalcoholicDrinks: []
    }


    componentDidMount() {
        this.nonalcoholicDrinks();
        
    };

    nonalcoholicDrinks = () => {
        API.nonalcoholicDrinks()
            .then (res => this.setState({ nonalcoholicDrinks: res.data }))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <div className='container drink_div' id='nonalco'>
                    <p className="favLabel">Non-Alcoholic Drinks</p>
                        <div className='row'>

                    {this.state.nonalcoholicDrinks.map(nonAlco => (
                        
                            <div className='drink_image col-sm-3'>

                                <Link to={"/detail/" + nonAlco._id}>
                                    <img src={nonAlco.image} ></img>
                                    <p>{nonAlco.title}</p>
                                </Link>
                            </div>
                            
                    ))}
                </div>
                </div>
                </div>
                )
    }

}

export default Nonalcoholic;