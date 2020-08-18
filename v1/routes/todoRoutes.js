const todoController = require("../controllers/todoController");

const todoRoutes = (app) => {
  app.get("/getTodos", async (req, res) => {
    await todoController.getTodos();
    await todoController.getSpecificTodo(123);
    res.send("getting all todos");
  });
  app.post("/addTodo", (req, res) => {
    res.send("adding to do");
  });
  app.put("/editTodo:id", (req, res) => {
    res.send("editing to do");
  });
  app.delete("/deleteTodo:id", (req, res) => {
    res.send("deleting to do");
  });
};

module.exports = todoRoutes;
