import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import API from '../utils/api';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom'


class DemoCarousel extends Component {
    state = {
        drinks: [],

    }


    componentDidMount() {
        this.loadDrinks();
    };

    loadDrinks = () => {
        API.getDrinks()
            .then(res => this.setState({ drinks: res.data }))
            .catch(err => console.log(err));
    };


    render() {
        return (
            <Carousel axis='horizontal' showThumbs={false}>
                {this.state.drinks.map((drink, index) => (
                
                <Link to={"/detail/" + drink._id}>   
                    <div key={index}>
                        <img src={drink.image} style={{ height: '600px' }} />
                        <p className="legend" style={{fontSize:'2em'}}>{drink.title}</p>
                    </div>
                    </Link>
                    
                ))}

            </Carousel>
        );
    }
};

export default DemoCarousel;