// Requires models //
let Technology = require('../models/technology.model')

// Controllers //
let allTechnologies = async(req, res) => {
    let allTech = await Technology.find()
    allTech = allTech.map((technology) => {
        technology.logo = `${req.protocol}://${req.headers.host}/img/${technology.logo}`
        return technology
    })
    return res.json({ error: false, data: allTech })
}

let oneTechnology = async(req, res) => {
    let { id } = req.params
    let oneTech = await Technology.findById(id)
    oneTech.logo = `${req.protocol}://${req.headers.host}/img/${oneTech.logo}`
    return res.json({ error: false, data: oneTech })
}

let searchTechnology = async(req, res) => {
    let { name } = req.params
    let searchTech = await Technology.find({ name: { $regex: new RegExp(name, 'i') } })
    searchTech = searchTech.map((technology) => {
        technology.logo = `${req.protocol}://${req.headers.host}/img/${technology.logo}`
        return technology
    })
    return res.json({ error: false, data: searchTech })
}

// Exports //
module.exports = {
    allTechnologies,
    oneTechnology,
    searchTechnology
}