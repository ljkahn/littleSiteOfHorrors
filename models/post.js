const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {

}

Post.init( 
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      references: {
        model: 'user',
        id: 'id'
      }
    },
    post_id: {
      type: DataTypes.INTEGER,
    },
    content: {
        type: DataTypes.TEXT,

    },
    topic: {
    type: DataTypes.TEXT,

    },

    user_name: {
    type: DataTypes.TEXT,
  },

    comment: {
      type: DataTypes.STRING
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = User;
