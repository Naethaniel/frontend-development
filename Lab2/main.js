var Database = {
    db: [],
    index: 0,
    addVegetable: function (vegetable) {
        if (!this.findVegetableByProperty(vegetable.name, 'name')) {
            this.index += 1
            vegetable.id = this.index
            this.db.push(vegetable)
        } else {
            console.log('Sorry we do not allow duplicates in our database.')
        }
    },
    removeVegetableByProperty: function (value, param) {
        var index = this.db.findIndex(function(elem) {
            return elem[param] === value
        })
        if (index) {
            this.db.splice(index, 1)
        }
    },
    findVegetableByProperty: function (value, param) {
        return this.db.find(function (element) {
            return element[param] === value
        })
    },
    findVegetablesByProperty: function (value, param) {
        return this.db.filter(function (element) {
            return element[param] === value
        })
    }
}
var tomato = {
    name: 'Tomato',
    color: 'Red',
    size: 'Small',
    species: 'Solanum lycopersicum',
    kingdom: 'Plantae',
    weight: 2,
    isEdible: true
}

var potato = {
    name: 'Potato',
    color: 'Brown',
    size: 'Big',
    species: 'Solanum tuberosum',
    kingdom: 'Plantae',
    weight: 10,
    isEdible: true
}

var cucumber = {
    name: 'Cucumber',
    color: 'Green',
    size: 'Big',
    species: 'Cucumis sativus',
    kingdom: 'Plantae',
    weight: 5,
    isEdible: true
}

var rottenPotato = {
    name: 'Rotten potato',
    color: 'Brown',
    size: 'Big',
    species: 'Solanum tuberosum',
    kingdom: 'Plantae',
    weight: 250,
    isEdible: false
}

Database.addVegetable(tomato)
Database.addVegetable(potato)
Database.addVegetable(cucumber)
Database.addVegetable(cucumber)
Database.addVegetable(rottenPotato)

console.log(Database.db)

console.log(Database.findVegetableByProperty('Tomato', 'name'))
console.log(Database.findVegetableByProperty('Test', 'name'))

Database.removeVegetableByProperty(4, 'id')

console.log(Database.db)

Database.findVegetablesByProperty('Plantae', 'kingdom')