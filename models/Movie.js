const {Model, DataTypes } = require ('sequlize');
const sequelize = require('../config/connection');

class Movie extends Model {}

Movie.init(
    {
        movie_id: {
            type: DataTypes.INTEGER,
            foreignKey: true,
            autoIncrement: true,
        },

        title: {
            type: DataTypes.STRING

        },

        director: {
            type: DataTypes.STRING

        },

        genre: {
            type: DataTypes.STRING
        },

        rating: {
            type: DataTypes.INTEGER,
            validate: {
                min:1,
                max:5
            }
        }, 

        release_year: {
            type: DataTypes.INTEGER

        }


    },
{
    sequelize, 
    modelName: 'movie',

}

);

module.exports = Movie