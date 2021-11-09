const {User, Routine, Cycle, Day, Exercise, Set} = require("../schemas/model.mongo.js")

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
        } else {
            console.log("deleted old set")
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
        console.log("saved edited set("  + s.id  +")")
    })

    return savingSet;
}

const editExercise = async (newExercise, id) => {

    //delete old exercise
    Exercise.findByIdAndDelete({_id: id}, function(err){
        if(err) {
            console.log(err)
            console.log("could not find exercise to delete")
        } else {
            console.log("deleted old exercise")
        }
    })

    //create mongo exercise from model and input
    savingExercise = new Exercise({
        name: newExercise.name,
        type: newExercise.type,
        volume: newExercise.volume,
        maxWeight: newExercise.maxWeight,
        maxVolume: newExercise.maxVolume,
        maxReps: newExercise.maxReps,
        sets: newExercise.sets,
        parent: newExercise.parent

    })

    //save new exercise
    await savingExercise.save( (err, e) => {
        if(err) return console.log(err)
        console.log("saved edited exercise(" + e.id + ")")
    })

    //return new exercise (w/ new id)
    return savingExercise
}

const editDay = async (newDay, id) => {

    //delete old day
    Day.findByIdAndDelete({_id: id}, function(err){
        if(err) {
            console.log(err)
            console.log("could not find day to delete")
        } else {
            console.log("deleted old day")
        }
    })

    //create mongo day from model and input
    savingDay = new Day({
        date: newDay.day,
        isRest: newDay.isRest,
        exercises: newDay.exercises,
        parent: newDay.parent
    })

    //save new day
    await savingDay.save( (err, d) => {
        if(err) return console.log(err)
        console.log("saved edited day(" + d.id + ")")
        
    })

    //return new day (w/ new id)
    return savingDay
}

const editCycle = async (newCycle, id) => {
    
    //delete old cycle
    Cycle.findByIdAndDelete({_id: id}, function(err){
        if(err) {
            console.log(err)
            console.log("could not find cycle to delete")
        } else {
            console.log("deleted old cycle")
        }
    })

    //create mongo cycle from model and input
    savingCycle = new Cycle({
        startDate: newCycle.startDate,
        endDate: newCycle.endDate,
        days: newCycle.days,
        parent: newCycle.parent
    })

    //save new cycle
    await savingCycle.save( (err, c) => {
        if(err) return console.log(err)
        console.log("saved edited cycle(" + c.id + ")")
        
    })

    //return new cycle (w/ new id)
    return savingCycle
}
const editRoutine = async (newRoutine) => {
    
     //delete old routine
     Routine.findByIdAndDelete({_id: id}, function(err){
        if(err) {
            console.log(err)
            console.log("could not find routine to delete")
        } else {
            console.log("deleted old routine")
        }
    })

    //create mongo routine from model and input
    savingRoutine = new Routine({
        name: newRoutine.name,
        cycles: newRoutine.cycles,
        parent: newRoutine.parent
    })

    //save new routine
    await savingRoutine.save( (err, r) => {
        if(err) return console.log(err)
        console.log("saved edited routine(" + r.id + ")")
        
    })

    //return new routine (w/ new id)
    return savingRoutine
}

const editUser = async (newUser) => {
    User.findByIdAndDelete({_id: id}, function(err){
        if(err) { 
            console.log(err)
            console.log("could not find user to delete")
        } else {
            console.log("deleted old user")
        }
    })

    savingUser = new User({
        username: newUser.username,
        password: newUser.password,
        colorScheme: newUser.colorScheme,
        inKilos: newUser.inKilos,
        routines: newUser.routines
    })

    await savingUser.save( (err, r) => {
        if(err) return console.log(err)
        console.log("saved edited user(" + u.id + ")")
    })

    return savingUser
}

module.exports={
    editSet, editExercise, editDay, editCycle, editRoutine, editUser
}