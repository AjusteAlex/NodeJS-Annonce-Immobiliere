'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Users', [{
      name: "Alex",
      age: 25,
      email: "alex@gmail.com",
      password: "$2b$10$0YH8VYYPYvvQr8L1avBsne/IZCLM0IH1zYkKGdk/.57mTyEVZerBa",
      tel : "0770465958",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);
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
