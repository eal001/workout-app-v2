# WorkoutAppV2 #

## plan ##
This application is a continuation of my old Workout App. I plan for this project to be a fullstack application 
with one part managing a server that handles data storage, and the frontend acting as a tool that can be used in 
both online and offline modes. The data will be stored locally on the user's device as well as on the mongo server. 
The server is essentially just a backup data storage system and syncing tool across multiple platforms. Hopefully I
can also get a secure username / password system that will cover all bases in terms of multiple users having access 
to the platform. Communication will be done using a GraphQL API rather than a REST API. I would like for the data 
to update incrementally when the user uppdates fields inside of the app, and send small snippets of information to 
the GraphQL server. When the app is initially opened up I would like to have the local data override the server data. 
Additionally, I plan to optimize the data structures and algorithms that I did not in the previous Workout App.

