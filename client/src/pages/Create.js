import React, { Component } from "react";
import API from "../utils/api";
import SearchBar from "../Components/search";
import Favorites from "../Components/favorites";
import { Input, TextArea, FormBtn } from "../Components/Form";

class Create extends Component {
    state = {
        books: [],
        name: "",
        ingredients: [],
        directions: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title && this.state.author) {
            API.saveDrink({
                title: this.state.title,
                author: this.state.author,
                synopsis: this.state.synopsis
            })
                .then(res => this.loadBooks())
                .catch(err => console.log(err));
        }
    };




    render() {
        return (
            <div>
                <div>
                    <Favorites />
                </div>
                <form>
                    <p class="createLabel">Create your own drink</p>
                    <Input
                        value={this.state.title}
                        onChange={this.handleInputChange}
                        class="inputBox"
                        name="Name"
                        placeholder="Name of the drink"
                    />
                    <br></br>
                    <Input
                        value={this.state.ingredients}
                        onChange={this.handleInputChange}
                        class="inputBox"
                        name="ingredients"
                        placeholder="Ingredients for the drink"
                    />
                    <br></br>
                    <TextArea
                        value={this.state.directions}
                        onChange={this.handleInputChange}
                        class="inputBox2"
                        name="directions"
                        placeholder="Directions to make the drink"
                    />
                    <br></br>
                    <FormBtn
                        onClick={this.handleFormSubmit}
                    >
                        Submit drink
            </FormBtn>
                </form>

            </div>
        );
    }
}

export default Create;


