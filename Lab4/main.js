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

Vegetable.prototype = {
    getWeight: function () {
        return this.weight
    },
    getIsEdible: function () {
        return this.isEdible
    },
    setWeight: function (weight) {
        this.weight = weight
    },
    setIsEdible: function (isEdible) {
        this.isEdible = isEdible
    },
    message: function () {
        return 'Hello, i am Vegetable (' + this.name + ' ' + this.color + ')'
    }
}

var Tomato = new Vegetable('Tomato', 'red', 30, 'species', 'kingdom', 900, true)
console.log(Tomato.message())





