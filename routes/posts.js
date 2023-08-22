const express = require("express");
const postController = require("../controller/post.controller");

const router = express.Router();

router.get("/", postController.index);
router.post("/save", postController.save);
router.get("/show/:id", postController.show);
router.patch("/update/:id", postController.update);
router.delete("/destroy/:id", postController.destroy);

module.exports = router;
