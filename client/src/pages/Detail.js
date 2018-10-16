import React, { Component } from 'react';
import API from '../utils/api';
import FavBtn from "../Components/FavButton"
import SearchBar from '../Components/search';
import Favorites from '../Components/favorites';
import {ProgressBar} from 'react-bootstrap'

let index=0;


class Drinks extends Component {
    
    state = {
        drinkinfo: "",
        zero: 268371,
        weightReading: 0,
        weight:" Not Connected",
        ingredientNames:[],
        ingredientWeight:[],
        otherIngredients:[],
        activeIngrName: "",
        activeIngrWeight: "",
        progress: 0,
        activeIngrIndex: 0,
        buttonText:"Start",
        displayString: "1. Turn on scale \n 2. Click 'Connect To Scale' above."
        
    }

    componentDidMount() {
        API.getDrink(this.props.match.params.id)
            .then(res => {
                this.setState({ drinkinfo: res.data })
                this.SetIngredients();
            })
            .catch(err => console.log(err));
        console.log(this.state.drinkinfo);
        
        
    }

    updateFavoriteDrink = id => {
        API.updateFavDrink(id)
            .then(res => console.log("added"))
            .catch(err => console.log(err));
    }




    render() {
        return (
            <div>
            <div className="row">
                   
                <div className='drinkinfo col-md-4'>
                    <img src={this.state.drinkinfo.image && this.state.drinkinfo.image.slice(1)} /> 
                    <FavBtn onClick={() => this.updateFavoriteDrink(this.state.drinkinfo._id)} />
                        <h1>{this.state.drinkinfo.title}</h1>
                        {this.state.drinkinfo.ingredients && this.state.drinkinfo.ingredients.map(ingredient =>(
                            <h2>{ingredient}</h2>
                        ))}
                        <h3>{this.state.drinkinfo.directions}</h3>
                </div >
                <div className='pourInfo col-md-8 '>
                <a href='/'><h1 id='title'>AwesomePour</h1></a>
                <button className="btn btn-primary" onClick={this.connect}> Connect to Scale</button>
                <button className="btn btn-primary" onClick={this.zero} >Zero Scale</button>
                <h1> Weight: {this.state.weight} </h1>
                <h3 className="display-str"> {this.state.displayString} </h3>
                <ProgressBar striped bsStyle="success" now={this.state.progress} >
                </ProgressBar>
                {/* <h3> progress: {this.state.progress}</h3> */}
                <button className="btn btn-primary" onClick={this.next}>{this.state.buttonText}</button>
                </div>
            </div>
        </div>

        )
    }



    next=()=>{
        if(index<this.state.ingredientNames.length){
            this.setState({buttonText: "Next"})
            this.setState({activeIngrName: this.state.ingredientNames[index]});
            this.setState({activeIngrWeight:
                this.state.ingredientWeight[index]});

            
            this.setState({displayString:"Add "+this.state.ingredientWeight[index] +"oz of "+this.state.ingredientNames[index]})

            index++;
            this.zero();
            
        }else if(index===this.state.ingredientNames.length){
            this.setState({displayString: "Add "+ this.state.otherIngredients.join(", and ")+"\n" +"     Then " +"\n"+this.state.drinkinfo.directions});
            this.setState({buttonText: "Done"})
            index++;
        }else{
            this.setState({displayString:"Enjoy!!!! and hire someone from our team!!"})
        }

    }

    SetIngredients=()=>{
        console.log("setting ingredients")
        console.log(this.state.drinkinfo)
        if(this.state.drinkinfo.ingredients){
            this.state.drinkinfo.ingredients.map(ingredient =>{
                let ingredientArray=ingredient.split(" ");
                console.log(ingredientArray);
                if(ingredientArray[1].toLowerCase()=== "oz."||ingredientArray[1].toLowerCase()==="oz"){
                    var joined = this.state.ingredientNames.concat(ingredientArray.slice(2).join(" "));
                    this.setState({ ingredientNames: joined });
                    var joined2 = this.state.ingredientWeight.concat(Number(ingredientArray[0]));
                    this.setState({ ingredientWeight: joined2 });
                }else{
                    var joined3=this.state.otherIngredients.concat(ingredient);
                    this.setState({otherIngredients: joined3})
                }
                
            })
        }
        this.setState({activeIngrName: this.state.ingredientNames[0]});
        this.setState({activeIngrWeight:this.state.ingredientWeight[0]});
        console.log(this.state.otherIngredients);
    }

    zero=()=>{
        this.setState({zero: this.state.weightReading});
        
    }



    connect=()=>{
        console.log('Requesting Bluetooth Device...');
        this.setState({weight: "Connecting..."});
        this.setState({displayString:" 1. Place cup on scale. \n 3. Click the 'Zero Scale' button above. \n 4. Click the 'Start' button below to begin."})
        navigator.bluetooth.requestDevice(
        {filters: [{services: ['battery_service','1bc50001-0200-0aa5-e311-24cb004a98c5']}]})
        .then(device => {
        console.log('Connecting to GATT Server...');
        return device.gatt.connect();
        })
        .then(server => {
        console.log('Getting Battery Service...');
        return server.getPrimaryService('1bc50001-0200-0aa5-e311-24cb004a98c5');
        })
        .then(service => {
        console.log('Getting Battery Level Characteristic...');
        return service.getCharacteristic('1bc50002-0200-0aa5-e311-24cb004a98c5');
        })
        .then(characteristic => {
            var myCharacteristic = characteristic;
            return myCharacteristic.startNotifications().then(_ => {
            console.log('> Notifications started');
            myCharacteristic.addEventListener('characteristicvaluechanged',
                this.handleNotifications);
            });
        })
        .catch(error => {
        console.log('Argh! ' + error);
        });
    };


    handleNotifications=(event)=> {
        
        let value = event.target.value;
        let weightReading=new Uint32Array(event.target.value.buffer)[0];
        window.event=event;
        console.log(weightReading);
        this.setState({weightReading: weightReading});
        let weightValue=(weightReading-this.state.zero)/27341;

        this.setState({weight: weightValue.toFixed(2)});
        let progress=Math.floor((this.state.weight/this.state.activeIngrWeight)*100);
        
        this.setState({progress: progress})
        
    }
    

}

export default Drinks;

