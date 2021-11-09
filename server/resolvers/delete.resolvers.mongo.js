const {User, Routine, Cycle, Day, Exercise, Set} = require("../schemas/model.mongo.js")

//delete mutators

const deleteUser = async(id) => {

    console.log("trying to delete user "+ id)

    const oldUser = await User.findById(id)

    User.findByIdAndDelete({_id: id}, function(err){
        if(err){
            console.log(err)
            console.log("could not find routine " + id)
        }
    })

    console.log("deleted")

    return oldUser
}

const deleteRoutine = async (id) => {

    console.log("trying to delete routine " + id)

    const oldRoutine = await Routine.findById(id)

    Routine.findByIdAndDelete({_id: id}, function(err){
        if(err){
            console.log(err)
            console.log("could not find routine " + id )
        }
    })

    console.log("deleted")

    return oldRoutine
}

const deleteCycle = async (id) => {

    console.log("trying to delete cycle " + id)

    const oldCycle = await Cycle.findById(id)

    Cycle.findByIdAndDelete({_id: id}, function(err){
        if(err){
            console.log(err)
            console.log("could not find cycle" + id)
        }
    })

    console.log("deleted")
}

const deleteDay = async (id) => {

    console.log("trying to delete day " + id)

    const oldDay = await Day.findById(id)

    Day.findByIdAndDelete({_id: id}, function(err) {
        if(err) {
            console.log(err)
            console.log("could not find day " + id)
        }
    })

    console.log("deleted")

    return oldDay
}

const deleteExercise = async (id) => {

    console.log("trying to delete exercise " + id);

    const oldExercise = await Exercise.findById(id)

    Exercise.findByIdAndDelete({_id: id}, function(err) {
        if(err){
             console.log(err)
             console.log("could not find exercise " + id)
        }
    })
    
    console.log("deleted")

    return oldExercise
}

const deleteSet = async (id) => {

    console.log("trying to delete set " + id);

    const oldSet = await Set.findById(id)

    Set.findByIdAndDelete({_id: id}, function(err) {
        if(err) {
            console.log(err)
            console.log("could not find set " + id)
        }
    })

    console.log("deleted")

    return oldSet
}

module.exports={
    deleteSet, deleteExercise, deleteDay, deleteCycle, deleteRoutine, deleteUser
}
