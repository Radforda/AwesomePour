const router = require("express").Router();
const favController = require("../../controllers/favcontroller");

router.route("/")
    .get(favController.findAll);

    router
    .route("/:id")
    .put(favController.update);


module.exports = router;