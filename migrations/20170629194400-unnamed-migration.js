'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.changeColumn(
      'Todos',
      'userId',
    {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  );
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.changeColumn(
      'Todos',
      'assignee',
    {
      type: Sequelize.INTEGER,
      allowNull: null
    }
  );
}
};
