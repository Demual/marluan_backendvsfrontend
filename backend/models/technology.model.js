// Requires //
const { Schema, model } = require('mongoose')

// Schemas //
let TechnologySchema = new Schema({
    name: { type: String },
    description: { type: String },
    logo: { type: String },
    tags: [{ type: String }]
}, { timestamps: { createdAt: true, updatedAt: true }})

// Exports //
module.exports = model('Technology', TechnologySchema)