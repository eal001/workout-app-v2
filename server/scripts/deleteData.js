const mongoose =  require("mongoose")
require("dotenv").config()
const url = process.env.MONGO_URL
const models = require("../model.mongo.js")
const userdata = require("../examples2/users.example.json")
const routinedata = require("../examples2/routines.example.json")
const cycledata = require("../examples2/cycles.example.json")
const daydata = require("../examples2/days.example.json")
const exercisedata = require("../examples2/exercises.example.json")
const setdata = require("../examples2/sets.example.json")

mongoose.connect(url, {useNewUrlParser: true}) //.then(console.log( "mongo database opened on " + url))
console.log("mongo database initialized on " + url)

userdata.users.forEach(user => {
    models.User.deleteMany(user)
    .then(v => {
        console.log("deleted users")
    })
    .catch( e => {
        console.log(e)
    });
})


routinedata.routines.forEach( routine => {
    models.Routine.deleteMany(routine)
    .then(v => {
        console.log("saved routines")
    })
    .catch( e => {
        console.log(e)
    });
})

cycledata.cycles.forEach( cycle => {
    models.Cycle.deleteMany(cycle)
    .then(v => {
        console.log("deleted cycles")
    })
    .catch( e => {
        console.log(e)
    });
});

daydata.days.forEach( day => {
    models.Day.deleteMany(day)
    .then(v => {
        console.log("deleted days")
    })
    .catch( e => {
        console.log(e)
    });
})

exercisedata.exercises.forEach( exercise => {
    models.Exercise.deleteMany(exercise)
    .then(v => {
        console.log("deleted exercises")
    })
    .catch( e => {
        console.log(e)
    });
})

setdata.sets.forEach( set => {
    models.Set.deleteMany(set)
    .then(v => {
        console.log("deleted sets")
    })
    .catch( e => {
        console.log(e)
    })

})

//mongoose.connection.close()