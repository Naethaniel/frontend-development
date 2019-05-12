const Vegetable = require('./models/Vegetable');

module.exports = class Database {
  constructor() {
    this._db = [
      new Vegetable(
        'Tomato',
        'Red',
        'Small',
        'Solanum lycopersicum',
        'Plantae',
        2,
        true,
        1
      ),
      new Vegetable(
        'Potato',
        'Brown',
        'Big',
        'Solanum tuberosum',
        'Plantae',
        10,
        true,
        2
      ),
      new Vegetable(
        'Cucumber',
        'Green',
        'Big',
        'Cucumis sativus',
        'Plantae',
        5,
        true,
        3
      ),
      new Vegetable(
        'Rotten potato',
        'Brown',
        'Big',
        'Solanum tuberosum',
        'Plantae',
        250,
        false,
        4
      )
    ]
  }

  addVegetable(vegetable) {
    if (!this.findVegetableByProperty(vegetable.name, 'name')) {
      this._db.push(vegetable);
      return vegetable
    } else {
      console.log('Sorry we do not allow duplicates in our database.')
    }
  };

  removeVegetableByProperty(value, param) {
    const index = this.db.findIndex(elem => elem[param] === value)
    if (index) {
      const removed = this._db[index];
      this._db.splice(index, 1);
      return removed
    }
  };

  findVegetableByProperty(value, property) {
    return this._db.find(vegetable => vegetable[property] === value)
  };

  findVegetablesByProperty(value, param) {
    return this._db.filter(element => element[param] === value)
  };

  updateVegetable(oldVegetable, newVegetable) {
    const index = this._db.findIndex(elem => elem.name === oldVegetable.name)
    if (index) {
      this._db[index] = newVegetable
    }
  };

  get db() {
    return this._db;
  }
}