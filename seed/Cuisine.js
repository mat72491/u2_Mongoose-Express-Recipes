const { trusted } = require('mongoose')
const db = require('../db')
const { Cuisine } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const cuisines = [
        {
          origin: 'Italy'
        },
        { 
            origin: 'England'
          }
    ]
    await Cuisine.insertMany(cuisines)
    console.log('Created cuisines!')

}


const run = async () => {
    await main()
    db.close() //as soon as main function is done we close the db in case there's an error
}
run() //calls main, which calls the brands