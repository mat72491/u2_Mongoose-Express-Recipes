const { Schema } = require('mongoose')

const cuisineSchema = new Schema(
    {
        origin: {type: String, required: true},
    },

{ timestamps: true }
)

module.exports = cuisineSchema