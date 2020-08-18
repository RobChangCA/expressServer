const dbConnection = require("../../config/dbConnect.js");
const queryHelper = require("../utils/queryHelper");
const usersController = {
  getUsers: async (app) => {
    const query = "select * from users";
    queryHelper(app, query);
  },
  createUser: (user) => console.log(user),
};

module.exports = usersController;
