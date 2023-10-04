const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comments extends Model {}

Comments.init(
    {
        commenter_user_name: {
            type: DataTypes.TEXT,
            primaryKey: true,
          },

          commenter_user_id: {
            type: DataTypes.TEXT,
            references: {
                model: 'user',
                id: 'user_id'
            },
          },
          comment_id: {
            type: DataTypes.INTEGER,
          },
          post_id: {
            type: DataTypes.INTEGER,

          },
          createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
          },
          updatedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
          },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'product_tag',
      }
);