const mongoose = require('mongoose')
const cuisineSchema = require('./Cuisine')
const directionsSchema = require('./Directions')
const recipeSchema = require('./Recipe')

const Cuisine = mongoose.model('Cuisine', cuisineSchema)
const Directions = mongoose.model('Directions', directionsSchema)
const Recipe = mongoose.model('Recipe', recipeSchema)

module.exports = {
    Cuisine,
    Directions,
    Recipe
}