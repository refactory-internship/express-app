'use strict';
const faker = require("faker");

const todos = () => {
  const data = [];
  for (let index = 0; index < 20; index++) {
    data.push(
      {
        title: faker.lorem.word(),
        desc: faker.lorem.sentence(),
        status: faker.random.boolean(),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent()
      }
    )
  }
  return data;
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Todos', todos());
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
