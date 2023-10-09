// import models
// const Post = require('../Post'); // ICEBOX
// const Review = require('../Review'); //
const User = require("../models/user");
const Movie = require("../models/Movie");
const Profile = require("../models/Profile");
const FavMovies = require("../models/favMovies");

User.hasOne(Profile, {
  foreignKey: "user_id",
});

Profile.belongsTo(User, {
  foreignKey: "user_id",
});

Movie.belongsToMany(Profile, {
  through: FavMovies,
  foreignKey: "movie_id",
});

Profile.belongsToMany(Movie, {
  through: FavMovies,
  foreignKey: "profile_id",
});

// Profile.belongsToMany(Movies, {
//   through: Movies,
//   foreignKey: "movie_id",
// });

module.exports = {
  User,
  Movie,
  Profile,
  FavMovies,
};
