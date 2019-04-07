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
)
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
)

console.log(aVegetable.message())
console.log(aVegetable.weight)
console.log(aVegetable.isEdible)

const lib = {}

lib.module = (() => {
    const db = []
    const getSizeOfDb = () => db.length

    const addVegetable = (vegetable) => {
        if (!findVegetableByProperty(vegetable.name, 'name')) {
            db.push(vegetable)
            return vegetable
        } else {
            console.log('Sorry we do not allow duplicates in our database.')
        }
    }

    const removeVegetableByProperty = (value, param) => {
        const index = db.findIndex(elem => elem[param] === value)
        if (index) {
            const removed = db[index]
            db.splice(index, 1)
            return removed
        }
    }

    const findVegetableByProperty = (value, property) => {
        return db.find(vegetable => vegetable[property] === value)
    }

    const findVegetablesByProperty = (value, param) => {
        return db.filter(element => element[param] === value)
    }

    const updateVegetable = (oldVegetable, newVegetable) => {
        const index = db.findIndex(elem => elem.name === oldVegetable.name)
        if (index) {
            db[index] = newVegetable
        }
    }

    return {
        getDatabase: () => db,
        getDatabaseSize: () => getSizeOfDb(),
        addVegetable,
        removeVegetableByProperty,
        findVegetableByProperty,
        findVegetablesByProperty,
        updateVegetable
    }
})()

const tomato = new Vegetable(
    'Tomato',
    'Red',
    'Small',
    'Solanum lycopersicum',
    'Plantae',
    2,
    true
)

const potato = new Vegetable(
    'Potato',
    'Brown',
    'Big',
    'Solanum tuberosum',
    'Plantae',
    10,
    true
)

const cucumber = new Vegetable(
    'Cucumber',
    'Green',
    'Big',
    'Cucumis sativus',
    'Plantae',
    5,
    true
)

const rottenPotato = new Vegetable(
    'Rotten potato',
    'Brown',
    'Big',
    'Solanum tuberosum',
    'Plantae',
    250,
    false
)

console.log(lib.module.db)

lib.module.addVegetable(tomato)
lib.module.addVegetable(potato)
lib.module.addVegetable(cucumber)
lib.module.addVegetable(cucumber)
lib.module.addVegetable(rottenPotato)

console.log(lib.module.getDatabase())

console.log(lib.module.findVegetableByProperty('Tomato', 'name'))
console.log(lib.module.findVegetableByProperty('Test', 'name'))

lib.module.removeVegetableByProperty('Rotten potato', 'name')
lib.module.findVegetablesByProperty('Plantae', 'kingdom')

const newVegetable = {
    name: 'Super new cucumber',
    color: 'Light green',
    size: 'Gigantic',
    species: 'Cucumis sativus',
    kingdom: 'Plantae',
    weight: 300,
    isEdible: true
}

lib.module.updateVegetable(cucumber, newVegetable)

console.log(lib.module.getDatabase())
console.log(lib.module.getDatabaseSize())