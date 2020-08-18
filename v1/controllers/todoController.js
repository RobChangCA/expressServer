// calls queries, business logic or other api
const todoController = {
  getTodos: () => console.log("get todo"),
  getSpecificTodo: (id) => console.log("this is the id ", id),
};

module.exports = todoController;
