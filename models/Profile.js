const {Model, DataTypes } = require ('sequlize');
const sequelize = require('../config/connection');

class Profile extends Model {}


Profile.init(
    {
        user_id: {
            type: DataTypes.INTEGER,
            foreignKey: true,
            autoIncrement: true,
        },

        location: {
            type: DataTypes.STRING,
            allowNull,

        },

        top_movies: {

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
    modelName: 'profile',

}

);

module.exports = Profile