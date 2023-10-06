const {Model, DataTypes } = require ('sequlize');
const sequelize = require('../config/connection');

class Profile extends Model {}


Profile.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
        },

        location: {
            type: DataTypes.STRING,
            allowNull: true,

        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        prompt_answer1: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        prompt_answer2: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        prompt_answer3: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'            }
        },
        spooky_scale: {
            type: DataTypes.INTEGER,
            validate: {
                min:1,
                max:5
            }
        }, 
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
            type: DataTypes.STRING
        }
    },
    
{
    sequelize, 
    modelName: 'profile',

}

);

module.exports = Profile