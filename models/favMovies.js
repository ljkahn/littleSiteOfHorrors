const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const { default: isURL } = require("validator/lib/isURL");
const Movie = require("./Movie");

class FavMovies extends Model {}

FavMovies.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    movie_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "movie",
        id: "movie_id",
      },
    },
    profile_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "profile",
        id: "id",
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
    freezeTableName: true,
    timestamps: false,
    modelName: "favMovie",
  }
);

module.exports = FavMovies;
