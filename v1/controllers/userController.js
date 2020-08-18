const dbConnection = require("../../config/dbConnect.js");
const queryHelper = require("../utils/queryHelper");
const usersController = {
  getUsers: async () => {
    const query = "SELECT * FROM users";
    return await queryHelper(query);
  },
  createUser: async (user) => {
    const { firstName, lastName } = user;
    const query = `INSERT INTO users (FirstName, LastName) VALUES ('${firstName}', '${lastName}');`;
    return await queryHelper(query);
  },
  deleteUser: async (id) => {
    const query = `DELETE FROM users WHERE ID = ${id}`;
    return await queryHelper(query);
  },
};

module.exports = usersController;
