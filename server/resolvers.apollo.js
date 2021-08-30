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

const qrs = require("./queryResolvers.apollo.js")

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
        
    }
};

module.exports = resolvers;