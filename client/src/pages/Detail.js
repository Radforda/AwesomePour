import React, { Component } from 'react';
import API from '../utils/api';
import SearchBar from '../Components/search';
import Favorites from '../Components/favorites';


class Drinks extends Component {
    state = {
        drinkinfo: {},
    }

    componentDidMount() {
        API.getDrink(this.props.match.params.id)
            .then(res => this.setState({ drinkinfo: res.data }))
            .catch(err => console.log(err));
    }


    render() {
        return (
            <div>

                <div className='drinkinfo'>
                <img src={this.state.drinkinfo.image && this.state.drinkinfo.image.slice(1)} /> 
                {console.log(this.state.drinkinfo.image)}

                    <h1>

                        {this.state.drinkinfo.title}
                    
                    </h1>

                    
                    {this.state.drinkinfo.ingredients && this.state.drinkinfo.ingredients.map(ingredient =>(
                        
                        <h2>{ingredient}</h2>

                    ))}
                                      <h3>{this.state.drinkinfo.directions}</h3>

                </div>
            </div>
        )
    }
}

export default Drinks;

