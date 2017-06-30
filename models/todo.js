'use strict';
module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define('Todo', {
    title: DataTypes.STRING,
    priority: DataTypes.INTEGER,
    due: DataTypes.DATEONLY,
    completed: DataTypes.BOOLEAN,
    assignee: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Todo.associate=function(models){
    Todo.belongsTo(models.User, {foreignKey: 'userId'});
    Todo.belongsToMany(models.User, {through: 'UserTodos'});
  };
  return Todo;
};
