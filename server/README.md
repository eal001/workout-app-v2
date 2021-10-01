# WorkoutAppV2 Server #

## about ##
The mongo server will be set up with multiple databases with each data type as a collection.
collections: users, routines, cycles, days, exercises, sets

## getting started ##
This server was built using Node.js v12.22.3

within the WorkoutAppV2/server directory, type
```
npm install 
```
in order to install necessary dependencies

booting up the server is done using the command 
```
npm start
```
As of now, the server will be locally hosted on port 8000, so typing in
```
http://localhost:8000/
```
to your browser should display a sandbox to play around with.

## functionality ##
For version 1, the Querys and Mutations will be built out, with data storage into a mongo 
database. Most useful parameters for searching through data types will be built out as 
querys. Edits will be simple graphQL mutations.
Solution to Unique ID's and database references: The schemas will not require unique ID's for 
the actual object in mongodb, but will need their "sub objects" id's. So we will store them to
MongoDB first, generating a unique ID, and then adding it to the parent before storing the parent.
On load from the database, the larger object will be loaded first, then its children objects.


## excluded functionality ##
No Maximums/PRs will not be impelmented in the first version because it will take time for me 
to figure out how to best implement that functionality. This is planned after a stable v1 mvp
mobile app can be implemented. 
password encryption will be ignored for the first mvp, but will be the first feature added after
the mobile app/ website is built