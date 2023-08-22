const validator = require("fastest-validator");
const models = require("../models");

function save(req, res) {
  const posts = {
    title: req.body.title,
    content: req.body.content,
    imageUrl: req.body.imageUrl,
    categoryId: req.body.categoryId,
    userId: 1,
  };

  const schema = {
    title: { type: "string", optional: false, max: "255" },
    content: { type: "string", optional: false, max: "500" },
    content: { type: "string", optional: false, max: "500" },
    categoryId: { type: "number", optional: false },
  };
  const v = new validator();
  const validationResponse = v.validate(posts, schema);

  if (validationResponse !== true) {
    return res.status(400).json({
      message: "Validation Faild",
      errors: validationResponse,
    });
  }
  models.Post.create(posts)
    .then((result) => {
      res.status(201).json({
        message: "Post created successfull",
        post: result,
      });
    })
    .catch((errors) => {
      res.status(500).json({
        message: "Something went wrong!",
        errors: errors,
      });
    });
}
function show(req, res) {
  const id = req.params.id;

  models.Post.findByPk(id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((errors) => {
      res.status(500).json({
        message: "Something went wrong!",
        errors: errors,
      });
    });
}

function index(req, res) {
  models.Post.findAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((errors) => {
      res.status(500).json({
        message: "Something went wrong!",
        errors: errors,
      });
    });
}
function update(req, res) {
  const id = req.params.id;
  const updatedPosts = {
    title: req.body.title,
    content: req.body.content,
    imageUrl: req.body.imageUrl,
    categoryId: req.body.categoryId,
    userId: 1,
  };
  const schema = {
    title: { type: "string", optional: false, max: "255" },
    content: { type: "string", optional: false, max: "500" },
    content: { type: "string", optional: false, max: "500" },
    categoryId: { type: "number", optional: false },
  };
  const v = new validator();
  const validationResponse = v.validate(posts, schema);

  if (validationResponse !== true) {
    return res.status(400).json({
      message: "Validation Faild",
      errors: validationResponse,
    });
  }

  models.Post.update(updatedPosts, { where: { id: id } })
    .then((result) => {
      res.status(201).json({
        message: "Post updated successfull",
        post: result,
      });
    })
    .catch((errors) => {
      res.status(500).json({
        message: "Something went wrong!",
        errors: errors,
      });
    });
}
function destroy(req, res) {
  const id = req.params.id;

  models.Post.destroy(updatedPosts, { where: { id: id } })
    .then((result) => {
      res.status(201).json({
        message: "Post deleted successfull",
      });
    })
    .catch((errors) => {
      res.status(500).json({
        message: "Something went wrong!",
        errors: errors,
      });
    });
}
module.exports = {
  save: save,
  show: show,
  index: index,
  update: update,
  destroy: destroy,
};
