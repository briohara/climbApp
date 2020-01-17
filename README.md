

### Directions to set up environment

- Both backend and frontend folders have a configuration file called .env . Currently this is in the repo but will be removed in the future.

- Backend needs to be run seperatly currently using "node app" while the front end gets spun up using "npm start".

## Setting up MongoDB
- Install MongoDB and locate the bin folder of MongoDB (should be directly on C drive).
- In CMD/bash run mongod --dbpath {pathTo}\data
  -this starts the actual MongoDB service on your machine
- To view the collections in your dbs you can use the MongoDB compass app installed with MongoDB
