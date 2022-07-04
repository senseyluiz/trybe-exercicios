'use strict';

const Livro = (sequelize, DataTypes) => {
  const Livro = sequelize.define("Livro", {
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
  })
  return Livro;
};

module.exports = Livro;