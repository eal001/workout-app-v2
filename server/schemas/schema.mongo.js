const mongoose = require("mongoose")

const userSchema = new mongoose.Schema( {
    //_id: String,
    username: String,
    password: String,
    colorScheme: String,
    routines: [String],
    inKilos: Boolean
});

const routineSchema = new mongoose.Schema( {
    //_id: String,
    name: String,
    cycles: [String],
    parent: String
});

const cycleSchema = new mongoose.Schema( {
    //_id: String,
    startDate: Date,
    endDate: Date,
    days: [String],
    parent: String
});

const daySchema = new mongoose.Schema( {
    //_id: String,
    date: Date,
    isRest: Boolean,
    exercises: [String],
    parent: String
});

const exerciseSchema = new mongoose.Schema( {
    //_id: String,
    type: Number,
    volume: Number,
    sets: [String],
    parent: String
})

const setSchema = new mongoose.Schema( {
    //_id: {type: String, required: false, default: null},
    weight: Number,
    reps: Number,
    volume: Number,
    isComplete: Boolean,
    parent: String
} )

module.exports = { 
    userSchema, 
    routineSchema, 
    cycleSchema, 
    daySchema, 
    exerciseSchema, 
    setSchema
}