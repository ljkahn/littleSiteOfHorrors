
const { Model, DataTypes } = require("sequlize");
const sequelize = require("../config/connection");

class Profile extends Model {}

Profile.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        id: "user_id",
      },
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    answer_1: {
        type:DataTypes.String,
        allowNull: true,
    },
    answer_2: {
        type:DataTypes.String,
        allowNull: true,
    },
    answer_3: {
        type:DataTypes.String,
        allowNull: true,
    },

    top_movies: {
        type: DataTypes.STRING,
        validate: {
            max:5
            //Datatype correct?
        }

    },

    spooky_scale: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1,
        max: 5,
      },
    },


  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'profile',
  }
);

module.exports = Profile;
