const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.Drink
            .find({ favorite: "yes" })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    update: function(req, res) {
        console.log("im in the update")
        db.Drink
        .findById(req.params.id, function(err, drink) {
          if (err) res.send(err);
          drink.favorite = "no";
          drink.save(function(err) {
            if (err)
                res.send(err);
    
            res.json({ message: 'Drink updated!' });
        });
        });
    }

}