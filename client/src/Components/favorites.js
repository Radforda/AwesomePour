import React, {Component} from "react";
import API from '../utils/api';
import { Link } from "react-router-dom";
import DeleteBtn from "./DeleteBtn";
import favbtn from "./FavButton";
import FavBtn from "./FavButton";

class Favorites extends Component {
    state = {
        favDrinks: []
    }


    componentDidMount() {
        this.favDrinks();
        
    };

    loadDrinks = () => {
        API.getDrinks()
            .then (res => this.setState({ drinks: res.data }))
            .catch(err => console.log(err));
    };

    deleteDrink = id => {
        API.deleteDrink(id)
          .then(res => this.favDrinks(), window.location.reload())
          .catch(err => console.log(err));
    };

    updateFavDrinkOff = id => {
        API.updateFavDrinkOff(id)
            .then(window.location.reload())
            .catch(err => console.log(err));
    }
    

    favDrinks = () => {
        API.favDrinks()
            .then (res => this.setState({ favDrinks: res.data }))
            .catch(err => console.log(err));
    };


    render() {
        return (
            <div>
                <div className='container'>
                    <p className="favLabel">Favorites</p>
                </div>
                <div className='favorites row'>
                {this.state.favDrinks.map(favDrink => (
                

                <div className='drink_image col-md-4'>
                    <Link to={"/detail/" + favDrink._id}>   
                        <img src = {favDrink.image} ></img>
                        <p>{favDrink.title}</p>
                    </Link>
                    <DeleteBtn onClick={() => this.updateFavDrinkOff(favDrink._id)} />
               </div>
                ))}
                </div>
            </div>
        )
    }

}

export default Favorites