module.exports = class Plant {
  constructor(name, color, size, species, kingdom) {
    this._name = name
    this._color = color
    this._size = size
    this._species = species
    this._kingdom = kingdom
  }

  message() {
    return `Hello, i am Plant (${this.species} ${this.kingdom})`
  }

  get name() {
    return this._name
  }

  get color() {
    return this._color
  }

  get size() {
    return this._size
  }

  get species() {
    return this._species
  }

  get kingdom() {
    return this._kingdom
  }

  set name(name) {
    this._name = name
  }

  set color(color) {
    this._color = color
  }

  set size(size) {
    this._size = size
  }

  set species(species) {
    this._species = species
  }

  set kingdom(kingdom) {
    this._kingdom = kingdom
  }

}