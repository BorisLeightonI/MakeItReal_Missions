const router = require("express").Router();
const videoController = require("../controllers/video.controller");

router.route("/").get(videoController.list)

router.route("/:videoId")
      .get(videoController.show)
      .put(videoController.update)
      .delete(videoController.destroy)

router.route("/:userId")
      .post(videoController.create)

module.exports = router;