const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) { 
    db.Drink.find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Drink
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Drink
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    console.log("im in the update")
    db.Drink
    .findById(req.params.id, function(err, drink) {
      if (err) res.send(err);
      drink.favorite = "yes";
      drink.save(function(err) {
        if (err)
            res.send(err);

        res.json({ message: 'Drink updated!' });
    });
    });
  },
  remove: function(req, res) {
    db.Drink
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
