// import models
// const Post = require('../Post'); // ICEBOX
// const Review = require('../Review'); //
const User = require("../models/user");
const Movies = require("../models/Movie");
const Profile = require("../models/Profile");
const FavMovies = require("../models/favMovies");

User.hasOne(Profile, {
  foreignKey: "user_id",
});

Profile.belongsTo(User, {
  foreignKey: "user_id",
});

Movies.belongsToMany(Profile, {
  through: FavMovies,
  foreignKey: "movie_id",
});

Profile.belongsToMany(Movies, {
  through: FavMovies,
  foreignKey: "profile_id",
});

// Profile.belongsToMany(Movies, {
//   through: Movies,
//   foreignKey: "movie_id",
// });

module.exports = {
  User,
  Movies,
  Profile,
  FavMovies,
};
