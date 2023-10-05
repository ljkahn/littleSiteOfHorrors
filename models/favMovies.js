const {Model, DataTypes } = require ('sequlize');
const sequelize = require('../config/connection');

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