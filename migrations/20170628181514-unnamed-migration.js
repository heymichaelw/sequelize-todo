'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.changeColumn(
      'Todos',
      'assignee',
    {
      type: Sequelize.STRING,
      defaultValue: "me"
    }
  );
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.changeColumn(
      'Todos',
      'assignee',
    {
      defaultValue: null
    }
  );
}
};
