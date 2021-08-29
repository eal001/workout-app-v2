const mongoose =  require("mongoose")
require("dotenv").config()
const url = process.env.MONGO_URL
const models = require("../model.mongo.js")
const userdata = require("../examples/users.example.json")
const routinedata = require("../examples/routines.example.json")
const cycledata = require("../examples/cycles.example.json")
const daydata = require("../examples/days.example.json")
const exercisedata = require("../examples/exercises.example.json")
const setdata = require("../examples/sets.example.json")

mongoose.connect(url, {useNewUrlParser: true}) //.then(console.log( "mongo database opened on " + url))
console.log("mongo database initialized on " + url)

//Add here
const obj = {
    "username": "veganman",
    "password": "password",
    "colorScheme": "Dark",
    "routines": [],
    "inKilos": true
}

models.User.create(obj, function(error, data) {
    if (error) return handleError(error)
    console.log(data.id)
})

//mongoose.connection.close()