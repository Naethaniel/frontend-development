const Vegetable = require('./models/Vegetable');

module.exports = class Database {
  constructor() {
    this._db = [
      new Vegetable(
        'Tomato',
        'Red',
        20,
        'Solanum lycopersicum',
        'Plantae',
        2,
        true,
        1
      ),
      new Vegetable(
        'Potato',
        'Brown',
        30,
        'Solanum tuberosum',
        'Plantae',
        10,
        true,
        2
      ),
      new Vegetable(
        'Cucumber',
        'Green',
        45,
        'Cucumis sativus',
        'Plantae',
        5,
        true,
        3
      ),
      new Vegetable(
        'Rotten potato',
        'Brown',
        11,
        'Solanum tuberosum',
        'Plantae',
        250,
        false,
        4
      )
    ]
  }

  addVegetable(vegetable) {
    const {
      name,
      color,
      size,
      species,
      kingdom,
      weight,
      isEdible
    } = vegetable;
    if (!this.findVegetableByProperty(vegetable.name, 'name')) {
      this._db.push(new Vegetable(
        name,
        color,
        size,
        species,
        kingdom,
        weight,
        isEdible
      ));
      return vegetable
    } else {
      console.log('Sorry we do not allow duplicates in our database.')
    }
  };

  removeVegetableByProperty(value, param) {
    const index = this.db.findIndex(elem => elem[param] === value);
    if (index !== -1) {
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
    const index = this._db.findIndex(elem => elem.name === oldVegetable.name);
    if (index !== -1) {
      const createdVegetable = new Vegetable(
          newVegetable.name,
          newVegetable.color,
          newVegetable.size,
          newVegetable.species,
          newVegetable.kingdom,
          newVegetable.weight,
          newVegetable.isEdible,
          oldVegetable.id
      );
      this._db[index] = createdVegetable;
      return createdVegetable;
    }
  };

  get db() {
    return this._db;
  }
};
