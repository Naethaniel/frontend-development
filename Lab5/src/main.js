class Plant {
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

const aPlant = new Plant(
    'Plant',
    'Red',
    300,
    'Plant',
    'Fauna'
);
console.log(aPlant.message())
console.log(aPlant.name)

class Vegetable extends Plant {
    constructor(name, color, size, species, kingdom, weight, isEdible) {
        super(name, color, size, species, kingdom)
        this._weight = weight
        this._isEdible = isEdible
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

const aVegetable = new Vegetable(
    'Vegetable',
    'Green',
    500,
    'Vegetable',
    'Fauna',
    10,
    false
);

console.log(aVegetable.message())
console.log(aVegetable.weight)
console.log(aVegetable.isEdible)