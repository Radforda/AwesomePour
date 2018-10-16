import axios from 'axios';


export default {
    getDrinks: function(){
      return axios.get("/api/drinks");
    },

    favDrinks: function() {
      return axios.get("/api/favorites")
    },

    updateFavDrink: function(id) {
      console.log(id)
      return axios.put("/api/drinks/" + id)
    },

    updateFavDrinkOff: function(id) {
      return axios.put("/api/favorites/" + id)
    },

    ginDrinks: function() {
      return axios.get("/api/gin")
    },

    rumDrinks: function() {
      return axios.get("/api/rum")
    },

    vodkaDrinks: function() {
      return axios.get("/api/vodka")
    },

    bourbonDrinks: function() {
      return axios.get("/api/bourbon")
    },

    miscDrinks: function() {
      return axios.get("/api/misc")
    },

    champagneDrinks: function() {
      return axios.get("/api/champagne")
    },

    nonalcoholicDrinks: function() {
      return axios.get("/api/nonalcoholic")
    },
    
    getDrink: function(id) {
      return axios.get("/api/drinks/" + id);
    },

    getDrinkName: function(title) {
      console.log(title, "inside api")
      return axios.get("/api/drinks?title=" + title).then(response => response.data[0])
    },
   
    deleteDrink: function(id) {
      return axios.delete("/api/drinks/" + id);
    },
    
    saveDrink: function(drinkData) {
      console.log("something")
      return axios.post("/api/drinks", drinkData).then(response => console.log(drinkData))
    }
  };
  


