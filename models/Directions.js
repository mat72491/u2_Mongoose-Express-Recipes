const { Schema } = require('mongoose')

const directionsSchema = new Schema(
    {
        name: {type: String, required: true},
        directions: {type: Array, required: true},
    },

{ timestamps: true }
)

module.exports = directionsSchema