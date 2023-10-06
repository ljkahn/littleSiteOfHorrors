const {Model, DataTypes } = require ('sequlize');
const sequelize = require('../config/connection');
const { default: isURL } = require('validator/lib/isURL');

class favMovies extends Model {}

favMovies.init(
    {
        top_movie1: {
            type: DataTypes.STRING,
        },

        top_movie2: {
            type: DataTypes.STRING

        },

        top_movie3: {
            type: DataTypes.STRING

        },

        top_movie4: {
            type: DataTypes.STRING
        },

        top_movie5: {
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