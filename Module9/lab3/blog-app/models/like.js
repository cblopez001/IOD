const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');
const Post = require('./post');

const Like = sequelize.define('Like', {});

User.hasMany(Like);
Like.belongsTo(User);
Post.hasMany(Like);
Like.belongsTo(Post);

module.exports = Like;
