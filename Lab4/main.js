// Zadanie 1

var lib = {}

lib.module = (function () {
    var db = []

    function getSizeOfDb() {
        return db.length
    }

    return {
        addVegetable: function (vegetable) {
            if (!this.findVegetableByProperty(vegetable.name, 'name')) {
                db.push(vegetable)
                return vegetable
            } else {
                console.log('Sorry we do not allow duplicates in our database.')
            }
        },
        removeVegetableByProperty: function (value, param) {
            var index = db.findIndex(function (elem) {
                return elem[param] === value
            })
            if (index) {
                var removed = db[index]
                db.splice(index, 1)
                return removed
            }
        },
        findVegetableByProperty: function (value, property) {
            return db.find(function (vegetable) {
                return vegetable[property] === value
            })
        },
        findVegetablesByProperty: function (value, param) {
            return db.filter(function (element) {
                return element[param] === value
            })
        },
        updateVegetable: function (oldVegetable, newVegetable) {
            var index = db.findIndex(function (elem) {
                return elem.name === oldVegetable.name
            })
            if (index) {
                db[index] = newVegetable
            }
        },
        getDatabase: function () {
            return db
        },
        getDatabaseSize: function () {
            return getSizeOfDb()
        }
    }
})()

var tomato = new Vegetable(
    'Tomato',
    'Red',
    'Small',
    'Solanum lycopersicum',
    'Plantae',
    2,
    true
)

var potato = new Vegetable(
    'Potato',
    'Brown',
    'Big',
    'Solanum tuberosum',
    'Plantae',
    10,
    true
)

var cucumber = new Vegetable(
    'Cucumber',
    'Green',
    'Big',
    'Cucumis sativus',
    'Plantae',
    5,
    true
)

var rottenPotato = new Vegetable(
    'Rotten potato',
    'Brown',
    'Big',
    'Solanum tuberosum',
    'Plantae',
    250,
    false
)

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

var newVegetable = {
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

// Zadanie 2

function Plant(name, color, size, species, kingdom) {
    this.name = name
    this.color = color
    this.size = size
    this.species = species
    this.kingdom = kingdom
}

Plant.prototype = {
    getName: function () {
        return this.name
    },
    getColor: function () {
        return this.color
    },
    getSize: function () {
        return this.size
    },
    getSpecies: function () {
        return this.species
    },
    getKingdom: function () {
        return this.kingdom
    },
    setName: function (name) {
        this.name = name
    },
    setColor: function (color) {
        this.color = color
    },
    setSize: function (size) {
        this.size = size
    },
    setSpecies: function (species) {
        this.species = species
    },
    setKingdom: function (kingdom) {
        this.kingdom = kingdom
    },
    message: function () {
        return 'Hello, i am Plant (' + this.species + ' ' + this.kingdom + ')'
    }
}

function Vegetable(name, color, size, species, kingdom, weight, isEdible) {
    Plant.call(this, name, color, size, species, kingdom)
    this.weight = weight
    this.isEdible = isEdible
}

Vegetable.prototype = Object.create(Plant.prototype)
Vegetable.prototype.constructor = Plant

Vegetable.prototype.getWeight = function () {
    return this.weight
}

Vegetable.prototype.getIsEdible = function () {
    return this.isEdible
}

Vegetable.prototype.setWeight = function (weight) {
    this.weight = weight
}

Vegetable.prototype.setIsEdible = function (isEdible) {
    this.isEdible = isEdible
}

Vegetable.prototype.message = function () {
    return 'Hello, i am Vegetable (' + this.name + ' ' + this.color + ')'
}

var Tomato = new Vegetable('Tomato', 'red', 30, 'species', 'kingdom', 900, true)
console.log(Tomato.message())