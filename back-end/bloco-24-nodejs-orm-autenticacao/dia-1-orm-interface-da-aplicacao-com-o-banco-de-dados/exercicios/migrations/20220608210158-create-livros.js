'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.createTable('livros', { 
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },

        title: {
          type: Sequelize.STRING,
          allowNull: false,
        },

        author: {
          type: Sequelize.STRING,
          allowNull: false,
        },

        pageQuantity: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },

        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
        },

        updateAt: {
          type: Sequelize.DATE,
          allowNull: false,
        }

      });
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.dropTable('livros');
     
  }
};
