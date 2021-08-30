const mongoose = require("mongoose");
require("dotenv").config();
const {User, Routine, Cycle, Day, Exercise, Set} = require("./model.mongo.js")
const url = process.env.MONGO_URL;

mongoose.connect(url, {useNewUrlParser: true});

const user = async (id) => {
    let user = await User.findById(id)
    .then(console.log("found user("+ id + ")"))
    .catch(err => {
        console.log(err)
    })
    return user
}

const routines = async (id) => {
    let user = await User.findById(id)
    .then(console.log("found user(" + id + ")" ))
    .catch(err => {
        console.log(err)
    })
    let userRoutines = []
    user.routines.forEach( element => {
        let r = Routine.findById(element)
        .then(console.log("found routine(" + element + ")"))
        .catch(err => {
            console.log(err)
        })
        userRoutines.push(r)
    })
    return userRoutines
}

const routine = async (id) => {
    let r = await Routine.findById(id)
    .then(console.log("found routine (" + id + ")"))
    .catch(err => {
        console.log(err)
    })
    return r
}

const cycles = async (id) => {
    let r = await Routine.findById(id)
    .then(console.log("found routine (" + id + ")"))
    .catch(err => {
        console.log(err)
    })

    let routineCycles = []
    r.cycles.forEach( element => {
        let c = Cycle.findById(element)
        .then(console.log("found cycle(" + element + ")"))
        .catch(err => {
            console.log(err)
        })
        routineCycles.push(c)
    })
    return routineCycles
}

const cycle = async (id) => {
    let c = await Cycle.findById(id)
    .then(console.log("found cycle (" + id + ")"))
    .catch(err => {
        console.log(err)
    })
    return c
}

const days = async (id) => {
    let c = await Cycle.findById(id)
    .then(console.log("found cycle(" + id + ")"))
    .catch(err => {
        console.log(err)
    })

    let cycleDays = []
    c.days.forEach( element => {
        let d = days.findById(element)
        .then(console.log("found day(" + element + ")"))
        .catch(err => {
            console.log(err)
        })
        cycleDays.push(d)
    })
    return cycleDays
}

const day = async (id) => {
    let d = await Day.findById(id)
    .then(console.log("found day(" + id + ")"))
    .catch( err => {
        console.log(err)
    })
    return d
}

const exercises = async (id) => {
    let d = await Day.findById(id)
    .then(console.log("found day(" + id +")"))
    .catch( err => {
        console.log(err)
    })

    let dayExercises = []
    d.exercises.forEach(element => {
        let e = Exercise.findById(element)
        .then(console.log("found exercise(" + element + ")"))
        .catch(err => {
            console.log(err)
        })
        dayExercises.push(e)
    })
    return dayExercises
}

const exercise = async (id) => {
    let e  = await Exercise.findById(id)
    .then(console.log("found exercise (" + id + ")"))
    .catch(err => {
        console.log(err)
    })
    return e
}

const sets = async (id) => {
    let e  = await Exercise.findById(id)
    .then(console.log("found exercise(" + id + ")"))
    .catch(err => {
        console.log(err)
    })

    let exerciseSets = []
    e.sets.forEach( element => {
        let s = Set.findById(id)
        .then(console.log("found set(" + element + ")"))
        .catch( err => {
            console.log(err)
        })
        exerciseSets.push(s)
    })
    return exerciseSets
}

const set = async (id) => {
    let s  = await Set.findById(id)
    .then(console.log("fulfilled request for set (" + id + ")"))
    .catch(err => {
        console.log(err)
    })
    return s
}

module.exports = {
    user, routines, routine, cycles, cycle, days, day, exercise, exercises, sets, set
}