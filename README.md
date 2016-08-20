# DynamoDb CRUD with vogels

## Setup for AWS
- create a `.env` with the following key value pair
```
DYNAMODB_ACCESSKEYID = your-access-key
DYNAMODB_SECRETACCESSKEY = your-secret-access-key
DYNAMODB_REGION = us-east-1
```

## Setup for local
- Install [Docker](https://www.docker.com/)
- run `docker-compose up` in a new terminal to start up a local dynamo db


## Run the app
- run `npm i` in the project root to install npm packages
- run `npm start` to start the service
- navigate to [http://localhost:3000](http://localhost:3000) to create the user table for the first time
- navigate to [http://localhost:3000/users](http://localhost:3000/users) to view all users
- POST, PUT and DELETE to create, update or delete user(s) use [Postman](http://www.getpostman.com/) to make your life easier


this is a fork from: https://github.com/deepaksisodiya/CRUD-APIs-Using-Koajs-Vogels-Dynamodb