/**
 * Author: Elliot Lee
 * 
 * This file will act as the actual definition of the query and mutation requests.
 * This file will alos need to connect to the MongoDB database wherever it is currently being stored. 
 */


const mongoose = require("mongoose")
require("dotenv").config();
const url = process.env.MONGO_URL;

const routines = require("../examples/routines.example.json").routines
const cycles = require("../examples/cycles.example.json").cycles
const days = require("../examples/days.example.json").days
const exercises = require("../examples/exercises.example.json").exercises
const sets = require("../examples/sets.example.json").sets

const querys = require("./query.resolvers.mongo.js")
const add_mutators = require("./add.resolvers.mongo.js")
const delete_mutators = require("./delete.resolvers.mongo.js")
const edit_mutators = require("./edit.resolvers.mongo.js")

//init mongo connection here for all resolvers
mongoose.connect(url, {useNewUrlParser: true});
console.log("mongodb connection opened on port vv" + process.env.MONGO_PORT)

const resolvers = {
    Query: {
        // test query
        test: () => querys.test(),

        // 'Get' requests with ID payloads
        user: (_, {id}) => querys.user(id),
        routines: (_, {id}) => querys.routines(id),
        routine: (_, {id}) =>  querys.routine(id),
        cycles: (_, {id}) => querys.cycles(id),
        cycle: (_, {id}) => querys.cycle(id),
        days: (_, {id}) => qrs.days(id),
        day: (_, {id}) => querys.day(id),
        exercises: (_, {id}) => querys.exercises(id),
        exercise:  (_, {id}) => querys.exercise(id),
        sets: (_, {id}) => querys.sets(id),
        set: (_, {id}) => querys.set(id)
    },
    Mutation: {
        addSet: (_, {set}) => add_mutators.addSet(set),
        addExercise: (_, {exercise}) => add_mutators.addExercise(exercise),
        addDay: (_, {day}) => add_mutators.addDay(day),
        addCycle: (_, {cycle}) => add_mutators.addCycle(cycle),
        addRoutine: (_, {routine}) => add_mutators.addRoutine(routine),
        addUser: (_, {user}) => add_mutators.addUser(user),

        deleteSet: (_, {id}) => delete_mutators.deleteSet(id),
        deleteExercise: (_, {id}) => delete_mutators.deleteExercise(id),
        deleteDay: (_, {id}) => delete_mutators.deleteDay(id),
        deleteCycle: (_, {id}) => delete_mutators.deleteCycle(id),
        deleteRoutine: (_, {id}) => delete_mutators.deleteRoutine(id),
        deleteUser: (_, {id}) => delete_mutators.deleteUser(id),
        
        editSet: (_, {set, id}) => edit_mutators.editSet(set ,id),
        editExercise: (_, {exercise, id}) => edit_mutators.editExercise(exercise ,id),
        editDay: (_, {day, id}) => edit_mutators.editDay(day ,id),
        editCycle: (_, {cycle, id}) => edit_mutators.editCycle(cycle ,id),
        editRoutine: (_, {routine, id}) => edit_mutators.editRoutine(routine ,id),
        editUser: (_, {user, id}) => edit_mutators.editUser(user ,id),
    }
};

module.exports = resolvers;