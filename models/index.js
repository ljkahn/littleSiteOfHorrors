// import models
const Post = require('../Post');
const Review = require('../Review');
const User = require('../User');
const Movies = require ('../Movies')
const Profile = require('../Profile')

User.hasMany(Movies, {
    foreignKey: 'movie_id',
  });



Profile.hasMany(Movies, { 
  through: Movies, foreignKey: 'user_id' 
});