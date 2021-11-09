const {User, Routine, Cycle, Day, Exercise, Set} = require("../schemas/model.mongo.js")

//add mutators

const addUser = async (user) => {
    console.log("trying to add new routine")

    let newUser = new User({
        username: user.username,
        password: user.password,
        inKilos: user.inKilos,
        colorScheme: user.colorScheme,
        routines: user.routines
    })
    newUser.save( (err, u) => {
        if (err) return console.log(err)
        console.log("saved new user(" + u.id + ")")
        newUser = u
    })

    return newUser
}

const addRoutine = async (routine) => {

    console.log("tying to add new routine")

    let newRoutine = new Routine({
        name: routine.name,
        numCycles: routine.numCycles,
        cycles: routine.cycles,
        parent: routine.parent
    })
    newRoutine.save( (err, r ) => {
        if (err) return console.log(err)
        console.log("saved new routine("  + r.id  +")")
        newRoutine = r
    })
    return newRoutine
}

const addCycle = async (cycle) => {

    console.log("trying to add new cycle")

    let newCycle = new Cycle({
        numDays: cycle.numDays,
        startDate: cycle.startDate,
        endDate: cycle.endDate,
        days: cycle.days,
        parent: cycle.parent
    })
    newCycle.save( (err, c ) => {
        if (err) return console.log(err)
        console.log("saved new cycle("  + c.id  +")")
        newCycle = c
    })
    return newCycle
}

const addDay = async (day) => {

    console.log("trying to add new day")

    let newDay = new Day({
        numExercises: day.numExercises,
        date: day.date,
        isRest: day.isRest,
        exercises: day.exercises,
        parent: day.parent
    })
    newDay.save( (err, d ) => {
        if (err) return console.log(err)
        console.log("saved new cycle("  + d.id  +")")
        newDay = d
    })
    return newDay
}
const addExercise = async (exercise) => {

    console.log("trying to add new exercise")

    let newExercise = new Exercise({
        name: exercise.name,
        numSets: exercise.numSets,
        type: exercise.type,
        volume: exercise.volume,
        sets: exercise.sets,
        parent: exercise.parent
    })
    newExercise.save( (err, e ) => {
        if (err) return console.log(err)
        console.log("saved new exercise("  + e.id  +")")
        newExercise = e
    })
    return newExercise
}

const addSet = async (set) => {

    console.log("trying to addd new set")

    let newSet = new Set({
        weight: set.weight,
        reps: set.reps,
        volume: set.volume,
        isComplete: set.isComplete,
        parent: set.parent
    })
    newSet.save( (err, s ) => {
        if (err) return console.log(err)
        console.log("saved new set("  + s.id  +")")
        newSet = s
    })
    return newSet
}

module.exports={
    addUser, addRoutine, addCycle, addDay, addExercise, addSet
}