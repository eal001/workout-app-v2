/**
 * Author: Elliot Lee
 * 
 * This file will act as the actual definition of the query and mutation requests.
 * This file will alos need to connect to the MongoDB database wherever it is currently being stored. 
 */

const routines = require("./examples/routines.example.json").routines
const cycles = require("./examples/cycles.example.json").cycles
const days = require("./examples/days.example.json").days
const exercises = require("./examples/exercises.example.json").exercises
const sets = require("./examples/sets.example.json").sets

const qrs = require("./resolvers.mongo.js")

const resolvers = {
    Query: {
        // 'Get' requests with ID payloads
        routines: (_, {id}) => qrs.routines(id),
        routine: (_, {id}) =>  qrs.routine(id),
        cycles: (_, {id}) => qrs.cycles(id),
        cycle: (_, {id}) => qrs.cycle(id),
        days: (_, {id}) => qrs.days(id),
        day: (_, {id}) => qrs.day(id),
        exercises: (_, {id}) => qrs.exercises(id),
        exercise:  (_, {id}) => qrs.exercise(id),
        sets: (_, {id}) => qrs.sets(id),
        set: (_, {id}) => qrs.set(id)
    },
    Mutation: {
        addSet: (_, {set}) => qrs.addSet(set),
        addExercise: (_, {exercise}) => qrs.addExercise(exercise),
        addDay: (_, {day}) => qrs.addDay(day),
        addCycle: (_, {cycle}) => qrs.addCycle(cycle),
        addRoutine: (_, {routine}) => qrs.addRoutinet(routine),

        deleteSet: (_, {id}) => qrs.deleteSet(id),
        deleteExercise: (_, {id}) => qrs.deleteExercise(id),
        deleteDay: (_, {id}) => qrs.deleteDay(id),
        deleteCycle: (_, {id}) => qrs.deleteCycle(id),
        deleteRoutine: (_, {id}) => qrs.deleteRoutine(id),
        
        editSet: (_, {set, id}) => qrs.editSet(set ,id)
    }
};

module.exports = resolvers;