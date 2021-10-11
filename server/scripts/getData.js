require("dotenv").config({path: '../.env'})
const axios = require('axios')
const url = process.env.APOLLO_URL

//begin here for getting the routine

console.log("requesting to server at " + url)

const routineID = "616380457b40ef2013320f48"

const q1 = `
query getRoutines($routineID: ID! ) {
    routine(id: $routineID){
        _id
        name
    }
}
`
const variables = {
    routineID: routineID
}

const request = {
    url: url,
    method: 'post',
    data: {query: q1, variables: variables}
}

axios(request)
.then( (response) => {
    //console.log("here")
    console.log(response.data.data)
} )
.catch( (error) => console.log(error) )

//begin here for getting the cycle

//begin here for getting the day

//begin here for getting the exercises

//begin here for getting the sets

//mongoose.connection.close()