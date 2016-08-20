import vogels from 'vogels';
import model from './model';

export const createUser = function *() {
  this.body = yield create(model, this.request.body);
};

export const getUsers = function *() {
  this.body = yield getAllUsers(model);
};

export const getUser = function *() {
  this.body = yield getSingleUser(model, this.params.userId);
};

export const deleteUser = function *() {
  this.body = yield deleteSingleUser(model, this.params.userId);
};

export const updateUser = function *() {
  let data = Object.assign({}, {userId:this.params.userId}, this.request.body);
  this.body = yield updateSingleUser(model, data);
};

export const createUserTable = function *() {
    this.body = yield createTable(model, this.params.tableName);
}

const create = (model, data) => {
  return new Promise((resolve, reject) => {
    model.create(data, (err, user) => {
      if(err) {
        reject(err)
      }
      resolve(user);
    });
  });
};

const getAllUsers = (model) => {
  return new Promise((resolve, reject) => {
    model.scan().exec((err, users) => {
      if(err) {
        reject(err)
      }
      resolve(users);
    });
  });
};

const getSingleUser = (model, userId) => {
  return new Promise((resolve, reject) => {
    model.get({userId: userId}, (err, user) => {
      if(err) {
        reject(err);
      }
      resolve(user);
    });
  });
};

const deleteSingleUser = (model, userId) => {
  return new Promise((resolve, reject) => {
    model.destroy({userId: userId}, (err) => {
      if(err) {
        reject(err);
      }
      resolve('User deleted successfully');
    });
  });
};

const updateSingleUser = (model, data) => {
  return new Promise((resolve, reject) => {
    model.update(data, (err, user) => {
      if(err) {
        reject(err);
      }
      resolve(user);
    });
  });
};

const createTable = (model, tableName) => {
    return new Promise((resolve, reject) => {
        vogels.createTables((err) => {
            if(err) {
                reject(err);
            }
            resolve("User table has created successfully");
        });
    });
};

