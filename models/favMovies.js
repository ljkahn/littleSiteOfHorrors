const { Model, DataTypes } = require("sequlize");
const sequelize = require("../config/connection");
const { default: isURL } = require("validator/lib/isURL");
const Movie = require("./Movie");

class favMovies extends Model {}

favMovies.init(
  {
    movie_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "movie",
        id: "movie_id",
      },
    },

    // title: {
    //     type: DataTypes.STRING

    // },

    // genre: {
    //     type: DataTypes.STRING

    // },

    // director: {
    //     type: DataTypes.STRING
    // },

    // poster_url: {
    //     type: DataTypes.STRING,
    //     validate: {
    //         isURL: true,
    //     },
    // },

    // spooky_scale: {
    //     type: DataTypes.INTEGER,
    //     validate: {
    //         min:1,
    //         max:5
    //     }
    // },
  },
  {
    sequelize,
    modelName: "movie",
  }
);

module.exports = Movie;
