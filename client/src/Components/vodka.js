import React, {Component} from "react";
import API from '../utils/api';
import { Link } from "react-router-dom";

class Vodka extends Component {
    state = {
        vodkaDrinks: []
    }


    componentDidMount() {
        this.vodkaDrinks();
        
    };

    vodkaDrinks = () => {
        API.vodkaDrinks()
            .then (res => this.setState({ vodkaDrinks: res.data }))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <div className='container drink_div' id='vodka'>
                    <p className="favLabel">Vodka Drinks</p>
                    <div className='row'>

                        {this.state.vodkaDrinks.map(vodkaDrink => (

                            <div className='drink_image col-sm-3'>

                                <Link to={"/detail/" + vodkaDrink._id}>
                                    <img src={vodkaDrink.image} ></img>
                                    <p>{vodkaDrink.title}</p>
                                </Link>
                            </div>

                        ))}
                    </div>
                </div>
            </div>
        )
    }

}

export default Vodka;