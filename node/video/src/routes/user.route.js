const router = require("express").Router();
const userController = require("../controllers/user.controller");

router.route("/")
      .get(userController.list)
      .post(userController.create);

router.route("/:userId")
      .get(userController.show)

module.exports = router;

