const mongoose = require("mongoose");
require("dotenv").config();
const {User, Routine, Cycle, Day, Exercise, Set} = require("./model.mongo.js")
const url = process.env.MONGO_URL;

mongoose.connect(url, {useNewUrlParser: true});
console.log("mongodb connection opened on port " + process.env.MONGO_PORT)

//GET query Method headers

const test = async () => {
    console.log("test request recieved and validated")
    return "here is the test response"
}

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

//add mutators

const addUser = async (user) => {
    //TODO
}

const addRoutine = async (routine) => {
    let newRoutine = new Routine({
        name: routine.name,
        numCycles: routine.numCycles,
        cycles: routine.cycles,
        parent: routine.parent
    })
    newRoutine.save( (err, r ) => {
        if (err) return console.log(err)
        console.log("saved set("  + r.id  +")")
        newRoutine = r
    })
    return newRoutine
}

const addCycle = async (cycle) => {
    let newCycle = new Cycle({
        numDays: cycle.numDays,
        startDate: cycle.startDate,
        endDate: cycle.endDate,
        days: cycle.days,
        parent: cycle.parent
    })
    newCycle.save( (err, c ) => {
        if (err) return console.log(err)
        console.log("saved set("  + c.id  +")")
        newCycle = c
    })
    return newCycle
}

const addDay = async (day) => {
    let newDay = new Day({
        numExercises: day.numExercises,
        date: day.date,
        isRest: day.isRest,
        exercises: day.exercises,
        parent: day.parent
    })
    newDay.save( (err, d ) => {
        if (err) return console.log(err)
        console.log("saved set("  + d.id  +")")
        newDay = d
    })
    return newDay
}
const addExercise = async (exercise) => {
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
        console.log("saved exercise("  + e.id  +")")
        newExercise = e
    })
    return newExercise
}

const addSet = async (set) => {
    let newSet = new Set({
        weight: set.weight,
        reps: set.reps,
        volume: set.volume,
        isComplete: set.isComplete,
        parent: set.parent
    })
    newSet.save( (err, s ) => {
        if (err) return console.log(err)
        console.log("saved set("  + s.id  +")")
        newSet = s
    })
    return newSet
}

//delete mutators

const deleteSet = async (id) => {
    const oldSet = await Set.findById(id)

    Set.findByIdAndDelete({_id: id}, function(err) {
        if(err) {
            console.log(err)
            console.log("could not find set " + id)
        }
    })

    return oldSet
}

const deleteExercise = async (id) => {
    const oldExercise = await Exercise.findById(id)

    Exercise.findByIdAndDelete({_id: id}, function(err) {
        if(err){
             console.log(err)
             console.log("could not find exercise " + id)
        }
    })

    return oldExercise
}

const deleteDay = async (id) => {
    const oldDay = await Day.findById(id)

    Day.findByIdAndDelete({_id: id}, function(err) {
        if(err) {
            console.log(err)
            console.log("could not find day " + id)
        }
    })

    return oldDay
}

const deleteCycle = async (id) => {
    const oldCycle = await Cycle.findById(id)

    Cycle.findByIdAndDelete({_id: id}, function(err){
        if(err){
            console.log(err)
            console.log("could not find cycle" + id)
        }
    })
}

const deleteRoutine = async (id) => {
    const oldRoutine = await Routine.findById(id)

    Routine.findByIdAndDelete({_id: id}, function(err){
        if(err){
            console.log(err)
            console.log("could not find routine " + id )
        }
    })

    return oldRoutine
}

const deleteUser = async(id) => {
    //TODO

}

/**
 * 
 * @param {the new set with some/all of the new attributes} newSet 
 * @param {ID of the old set to edit} id 
 * @returns the new set with the corresponding ID
 */
const editSet = async (newSet, id) => {
        
    //delete the old set 
    Set.findByIdAndDelete({_id: id}, function(err) {
        if(err){
            console.log(err)
            console.log("could not find routine to delete")
        }    
    })

    // create mongo set from model
    savingSet = new Set({
        weight: newSet.weight,
        reps: newSet.reps,
        volume: newSet.volume,
        isComplete: newSet.isComplete,
        parent: newSet.parent
    })

    // save the new mongo set
    await savingSet.save( (err, s ) => {
        if (err) return console.log(err)
        console.log("saved set("  + s.id  +")")
    })

    return savingSet;
}

const editExercise = async (newExercise, id) => {
    //TODO
    newExercise = {

    }
    return newExercise
}

const editDay = async (newDay) => {

    //TODO
    return newDay
}

const editCycle = async (newCycle) => {
    //TODO

    return newCycle
}
const editRoutine = async (newRoutine) => {
    //TODO

    return newRoutine
}

const editUser = async (newUser) => {
    //TODO
    return newUser
}

module.exports = {
    //test querys
    test,
    //Querys
    user, routines, routine, cycles, cycle, days, day, exercise, exercises, sets, set,
    //Add Mutators
    addSet, addExercise, addDay, addCycle, addRoutine, addUser,
    //delete Mutators
    deleteSet, deleteExercise, deleteDay, deleteCycle, deleteRoutine, deleteUser,
    //edit Mutators
    editSet, editExercise, editDay, editCycle, editRoutine, editUser,
}