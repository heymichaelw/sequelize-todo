'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn(
    'Todos',
    'assignee',
    Sequelize.STRING
  );
},

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('Todos', 'assignee');
  }
};
