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


async function insertAll() {
    await models.Set.insertMany(setdata.sets)
    .then( v => {
        exercisedata.exercises[0].sets.push(v[0].id)
        exercisedata.exercises[0].sets.push(v[1].id)

        exercisedata.exercises[1].sets.push(v[2].id)
        exercisedata.exercises[1].sets.push(v[3].id)
        exercisedata.exercises[1].sets.push(v[4].id)
        exercisedata.exercises[1].sets.push(v[5].id)

        exercisedata.exercises[2].sets.push(v[6].id)
        exercisedata.exercises[2].sets.push(v[7].id)

        exercisedata.exercises[3].sets.push(v[8].id)
        exercisedata.exercises[3].sets.push(v[9].id)
        exercisedata.exercises[3].sets.push(v[10].id)
        exercisedata.exercises[3].sets.push(v[11].id)

        console.log(exercisedata.exercises)
        console.log("saved set")
    })
    .catch( e => {
        console.log(e)
    })


    await models.Exercise.insertMany(exercisedata.exercises)
        .then( v => {
            daydata.days[0].exercises.push(v[0].id)
            daydata.days[0].exercises.push(v[1].id)

            daydata.days[2].exercises.push(v[2].id)
            daydata.days[2].exercises.push(v[3].id)
            
            
            console.log("saved exercise")
        })
        .catch( e => {
            console.log(e)
        });

    await models.Day.insertMany(daydata.days)
        .then( v => {
            cycledata.cycles[0].days.push(v[0].id)
            cycledata.cycles[0].days.push(v[1].id)
            cycledata.cycles[1].days.push(v[2].id)
            cycledata.cycles[1].days.push(v[3].id)


            console.log(daydata.days)
            console.log("saved day")
        })
        .catch( e => {
            console.log(e)
        });

    await models.Cycle.insertMany(cycledata.cycles)
        .then( v => {
            routinedata.routines[0].cycles.push(v[0].id)
            routinedata.routines[0].cycles.push(v[1].id)


            console.log(cycledata.cycles)
            console.log("saved cycle")
        })
        .catch( e => {
            console.log(e)
        });
        
    await models.Routine.insertMany(routinedata.routines)
        .then( v => {
            userdata.users[0].routines.push(v[0].id)
            userdata.users[0].routines.push(v[1].id)

            console.log(routinedata.routines) 
            console.log("saved routine")
        })
        .catch( e => {
            console.log(e)
        });


    await models.User.insertMany(userdata.users)
        .then( v => {

            console.log(userdata.users)
            console.log("saved user")
        })
        .catch( e => {
            console.log(e)
        });


}

insertAll();

//mongoose.connection.close()