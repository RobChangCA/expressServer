const queryHelper = require("../utils/queryHelper");
const todoController = {
  getTodos: async () => {
    const query = `SELECT * FROM todos`;
    return await queryHelper(query);
  },
  addTodo: async (todo) => {
    const { userID, todoName, todoStatus } = todo;
    const query = `INSERT INTO Todos (UserID, TodoName, TodoStatus, TodoDate) VALUES (${userID}, '${todoName}', ${todoStatus}, "${new Date()
      .toJSON()
      .slice(0, 10)}")`;
    return await queryHelper(query);
  },
  updateTodo: async (todo) => {
    const { todoID, todoName, todoStatus } = todo;
    query = `UPDATE Todos SET TodoName = "${todoName}", TodoStatus = ${todoStatus}
    WHERE ID = ${todoID}`;
    return await queryHelper(query);
  },
  deleteTodo: async (todoID) => {
    query = `DELETE FROM Todos WHERE ID = ${todoID}`;
    return await queryHelper(query);
  },
};

module.exports = todoController;
