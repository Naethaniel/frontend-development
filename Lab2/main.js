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
    findVegetableByProperty: function (value, param) {
        return this.db.find(function (element) {
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

Database.findVegetableByProperty(3, 'id')

console.log(Database.db)

console.log(Database.findVegetableByProperty('Tomato', 'name'))
console.log(Database.findVegetableByProperty('Test', 'name'))



