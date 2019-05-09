import Plant from './Plant';

export default class Vegetable extends Plant {
  constructor(name, color, size, species, kingdom, weight, isEdible, id) {
    super(name, color, size, species, kingdom)
    this._weight = weight
    this._isEdible = isEdible
    this._id = id
  }

  message() {
    return `Hello, i am Vegetable (${this.name} ${this.color})`
  }

  get weight() {
    return this._weight
  }

  get isEdible() {
    return this._isEdible
  }

  set weight(weight) {
    this._weight = weight
  }

  set isEdible(isEdible) {
    this._isEdible = isEdible
  }
}