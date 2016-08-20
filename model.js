import vogels from 'vogels';
require('dotenv').load();

const AWS = vogels.AWS;

if(process.env.DYNAMODB_SECRETACCESSKEY) {
	// test on aws
    AWS.config.update({
        accessKeyId: process.env.DYNAMODB_ACCESSKEYID
        , secretAccessKey: process.env.DYNAMODB_SECRETACCESSKEY
        , region: process.env.DYNAMODB_REGION
    });
} else {
	// test locally via docker
	AWS.config.update({region: 'us-east-1'});
    const opts = {endpoint: 'http://localhost:8000', apiVersion: '2012-08-10'};
    vogels.dynamoDriver(new AWS.DynamoDB(opts));
}

import Joi from 'joi';

let User = vogels.define('User', {
  hashKey: 'userId',
  schema: {
    userId: vogels.types.uuid(),
    name: Joi.string(),
    location: Joi.string()
  }
});

export default User;