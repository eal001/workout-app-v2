const mongoose = require("mongoose")

const schemas = require("./schema.mongo")

const User = mongoose.model("user", schemas.userSchema)
const Routine = mongoose.model("routine", schemas.routineSchema)
const Cycle = mongoose.model("cycle", schemas.cycleSchema)
const Day = mongoose.model("day", schemas.daySchema)
const Exercise = mongoose.model("exercise", schemas.exerciseSchema)
const Set = mongoose.model("set", schemas.setSchema)

module.exports = {User, Routine, Cycle, Day, Exercise, Set}