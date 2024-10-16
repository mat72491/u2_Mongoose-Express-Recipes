const { Schema } = require('mongoose')

const recipeSchema = new Schema(
    {
        name: {type: String, required: true},
        origin: {type: Schema.Types.ObjectId, ref: 'Cuisine'},
        meal: {type: String, required: true},
        yield: {type: String, required: true},
        servingSize: {type: String, required: true},
        calories: {type: Number, required: true},
        prepTime: {type: String, required: true},
        ingredients: {type: Array, required: true},
        directions: {type: Schema.Types.ObjectId, ref: 'Directions'}
    },

{ timestamps: true }
)

module.exports = recipeSchema