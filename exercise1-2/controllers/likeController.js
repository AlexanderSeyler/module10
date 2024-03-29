"use strict";
const Models = require("../models");

const likePost = (req, res) => {
  console.log(req.body);
  Models.Like.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  likePost,
};
