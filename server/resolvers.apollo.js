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

const resolvers = {
    Query: {
        // general return all querys
        routines: () => routines,
        cycles: () => cycles,
        days: () => days,
        exercises: () => exercises,
        sets: () => sets,

        //return the object based on ID
        
    },
};

module.exports = resolvers;