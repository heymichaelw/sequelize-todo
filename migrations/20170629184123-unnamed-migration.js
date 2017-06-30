var models = require('../models');
'use strict';


module.exports = {
  up: function (queryInterface, Sequelize) {
    // models.Todo.findAll({
    //   where: {
    //     userId: null
    //   }
    // }).then(function(todos){
    //   todos.forEach(function(todo){
    //     todo.userId = 1;
    //     todo.save();
    //   });
    // });

    return models.Todo.update(
      { userId: 1},
      {where: {userId: null}}
    );
  },

  down: function (queryInterface, Sequelize) {

  }
};
