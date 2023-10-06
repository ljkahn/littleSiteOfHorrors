// import models
// const Post = require('../Post'); // ICEBOX
// const Review = require('../Review'); //
const User = require("../models/user");
const Movies = require("../models/Movie");
const Profile = require("../models/Profile");

User.hasOne(Profile, {
  foreignKey: "user_id",
});

Profile.belongsTo(User, {
  foreignKey: "user_id"
})



// User.hasMany(Movies, {
//   foreignKey: "movie_id",
// });

// Profile.hasMany(Movies, {
//   through: Movies,
//   foreignKey: "user_id",
// });

// Profile.belongsToMany(Movies, {
//   through: Movies,
//   foreignKey: "user_id",
// });
