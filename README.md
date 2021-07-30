# WorkoutAppV2 #

## tenative plan ##
This application is a continuation of my old Workout App. I plan for this project to be a fullstack application 
with one part managing a server that handles data storage, and the frontend acting as a tool that can be used in 
both online and offline modes. The data will be stored locally on the user's device as well as on the mongo server. 
The server is essentially just a backup data storage system and syncing tool across multiple platforms. Hopefully I
can also get a secure username / password system that will cover all bases in terms of multiple users having access 
to the platform. Communication will be done using a GraphQL API rather than a REST API. I would like for the data 
to update incrementally when the user uppdates fields inside of the app, and send small snippets of information to 
the GraphQL server. When the app is initially opened up I would like to have the local data override the server data. 
Additionally, I plan to optimize the data structures and algorithms that I did not in the previous Workout App.

### server ###
plan is to use node.js, apollo, javascript/typescript to create a server that can accept a bunch of data mutations 
and can query all of the routines necessary 

### mobile ###
plan is to use react native to build out a working view of the workouts and descriptions that are manually entered.

### web ###
plan is to use Vue or Next.js in order to set up a dynamic web service that displays data similar to the app, jsut on browser.


## getting started ##
I am using node version 14.17.3 to build this application, on a Mac OS bigSur 11.0.1
directions for windows 10 will be added in if any modifications are needed.

### server ###
within the WorkoutAppV2/server directory
```
npm install 
```

As of now, the server will be locally hosted on port 8000, so typing in
```
http://localhost:8000/
```
to your browser should display a sandbox to mess around with.

### mobile ###
within the WorkoutAppV2/mobile directory

#### ios ####

#### android ####
not sure yet

### web ###
within the WorkoutAppV2/web directory
not sure yet
