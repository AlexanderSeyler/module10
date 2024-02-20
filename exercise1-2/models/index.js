"use strict";
const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  port: dbConfig.port,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const User = require("./user"); //require the model
const Post = require("./post");
// const Like = require("./like");

async function init() {
  await User.sync(); // sync the model
  // also sync any extra models here
  await Post.sync();
  //   await Like.sync();
}

init();

module.exports = {
  User,
  Post,
  //   Like,
};
