
const Sequelize = require('sequelize');

const Actor = require('../app/models/Actor');

const databaseConfig = require('../config/database');

const models = [Actor];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models
      .map(model => model.init(this.connection))
  }
}

module.exports = new Database();
