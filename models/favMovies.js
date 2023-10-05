const {Model, DataTypes } = require ('sequlize');
const sequelize = require('../config/connection');
const { default: isURL } = require('validator/lib/isURL');

class favMovies extends Model {}

favMovies.init(
    {
        movie_id: {
            type: DataTypes.INTEGER,
            foreignKey: true,
            autoIncrement: true,
        },

        title: {
            type: DataTypes.STRING

        },

        genre: {
            type: DataTypes.STRING

        },

        director: {
            type: DataTypes.STRING
        },

        poster_url: {
            type: DataTypes.STRING,
            validate: {
                isURL: true,
            },
        },

        spooky_scale: {
            type: DataTypes.INTEGER,
            validate: {
                min:1,
                max:5
            }
        }, 


    },
{
    sequelize, 
    modelName: 'movie',

}

);

module.exports = Movie