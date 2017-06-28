'use strict';
module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define('Todo', {
    title: DataTypes.STRING,
    priority: DataTypes.INTEGER,
    due: DataTypes.DATEONLY,
    completed: DataTypes.BOOLEAN,
    assignee: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
      
      }
    }
  });
  return Todo;
};
