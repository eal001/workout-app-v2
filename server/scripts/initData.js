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

models.User.insertMany(userdata.users)
    .then(v => {
        console.log("saved users")
    })
    .catch( e => {
        console.log(e)
    });

models.Routine.insertMany(routinedata.routines)
    .then(v => {
        console.log("saved routines")
    })
    .catch( e => {
        console.log(e)
    });

models.Cycle.insertMany(cycledata.cycles)
    .then(v => {
        console.log("saved cycles")
    })
    .catch( e => {
        console.log(e)
    });

models.Day.insertMany(daydata.days)
    .then(v => {
        console.log("saved days")
    })
    .catch( e => {
        console.log(e)
    });
    
models.Exercise.insertMany(exercisedata.exercises)
    .then(v => {
        console.log("saved exercises")
    })
    .catch( e => {
        console.log(e)
    });

models.Set.insertMany(setdata.sets)
    .then(v => {
        console.log("saved sets")
    })
    .catch( e => {
        console.log(e)
    })