/**
 * Author: Elliot Lee
 * 
 * This js file is the schema. It defines the types that will be used as well as their corresponding inputs
 * It also provides an abstraction / header file of how the querys and mutations will act.
 */

const {gql} = require("apollo-server");
const typeDefs = gql`
#define types and inputs
type Set {
    _id: ID!,
    weight: Float,
    reps: Int,
    volume: Float,
    isComplete: Boolean,
    parent: ID!
}

input SetInput {
    weight: Float,
    reps: Int,
    volume: Float,
    isComplete: Boolean,
    parent: ID!
}

type Exercise{
    _id: ID!,
    name: String,
    type: Int,
    volume: Float,
    maxWeight: ID!,
    maxReps: ID!,
    maxVolume: ID!,
    sets: [ID!],
    parent: ID!
}

input ExerciseInput {
    name: String,
    type: Int,
    volume: Float,
    maxWeight: ID!,
    maxReps: ID!,
    maxVolume: ID! ,
    sets: [ID!],
    parent: ID!
}

type Day {
    _id: ID!,
    date: String,
    isRest: Boolean,
    exercises: [ID!],
    parent: ID!
}

input DayInput {
    date: String,
    isRest: Boolean,
    exercises: [ID!],
    parent: ID!
}

type Cycle {
    _id: ID!,
    startDate: String,
    endDate: String,
    days: [ID!]
    parent: ID!
}

input CycleInput {
    startDate: String,
    endDate: String,
    days: [ID!],
    parent: ID!
}

type Routine {
    _id: ID!,
    name: String,
    cycles: [ID!],
    parent: ID!
}   

input RoutineInput {
    name: String,
    cycles: [ID!],
    parent: ID!
}  

type User {
    _id: ID!,
    username: String,
    password: String,
    inKilos: Boolean,
    colorScheme: Int,
    routines: [Routine]
}

input UserInput {
    username: String,
    password: String,
    inKilos: Boolean,
    colorScheme: Int,
    routines: [ID!]
}


#define queries here
type Query {
    test: String,
    user(id: ID!): User,                                        # gives the specific user based on ID
    routines(id: ID!): [Routine],                               # gives all relavent routines from a User ID   .
    routine(id: ID!): Routine,                                  # gives a specific routine from a routine ID   .
    cycles(id: ID!): [Cycle],                                   # gives all cycles from a routine ID           .
    cycle(id: ID!): Cycle,                                      # gives specific cycle from a cycle ID         .
    days(id: ID!): [Day],                                       # gives all days from a cycle ID               .
    day(id: ID!): Day,                                          # gives a specific day from a day ID           .
    exercises(id: ID!): [Exercise],                             # gives all exercises from a day ID            .
    exercise(id: ID!): Exercise,                                # gives a specific exercise from an exercise ID.
    sets(id: ID!): [Set],                                       # gives all sets from an exercise ID           .
    set(id: ID!): Set                                           # gives a specific set from a set ID           .
}

#define mutators
type Mutation {
    addUser(user: UserInput): User,                             # adds a user to the database and returns its new user w/ unique ID
    addRoutine(routine: RoutineInput): Routine,                 # adds a routine to the database, returning its new unique ID
    addCycle(cycle: CycleInput): Cycle,                         # adds a Cycle to the given routine(by ID) and returns the new Cycle ID
    addDay(day: DayInput): Day,                                 # adds a day to the given cycle(by ID) and returns the new day ID
    addExercise(exercise:  ExerciseInput): Exercise,            # adds a exercise to the given day(by ID) and returns the new exercise ID
    addSet(set: SetInput): Set,                                 # adds a Set to the given exercise(by ID) and returns the new set ID
    
    deleteUser(id: ID!): User,                                  
    deleteRoutine(id: ID!): Routine,                            # deletes a routine from the databasse, given its ID
    deleteCycle(id: ID!): Cycle,                                # deletes a cycle from the database, given its ID
    deleteDay(id: ID!): Day,                                    # deletes a day from the database given its ID
    deleteExercise(id: ID!): Exercise,                          # deletes an exercise from the database given its ID
    deleteSet(id: ID!): Set                                     # deletes a set from the database given its ID

    editUser(id: ID!, routine: UserInput): User,                # replaces the user with the given ID with the param user, returns the old user
    editRoutine(id: ID!, routine: RoutineInput): Routine,       # replaces the routine with the given ID with the param routine, returns the old routine
    editCycle(id: ID!, cycle: CycleInput):  Cycle               # replaces the cycle with the given ID with the param cycle, returns the old cycle
    editDay(id: ID!, day: DayInput): Day                        # replaces the day with the given ID with the param day, returns the old day
    editExercise(id: ID!, exercise: ExerciseInput): Exercise,   # replaces the exercise with the given ID with the param exercise, returns the old exercise
    editSet(id: ID!, set: SetInput): Set                        # replaces the set with the given ID with the param set, returns the old set
}
`;

module.exports = typeDefs;