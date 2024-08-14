const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');
const Post = require('./post');

const Comment = sequelize.define('Comment', {
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

User.hasMany(Comment);
Comment.belongsTo(User);
Post.hasMany(Comment);
Comment.belongsTo(Post);

module.exports = Comment;
