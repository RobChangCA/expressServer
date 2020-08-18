const todoController = require("../controllers/todoController");

const todoRoutes = (app) => {
  app.get("/getTodos", async (_, res) => {
    const response = await todoController.getTodos();
    res.send(response);
  });
  app.post("/addTodo", async (req, res) => {
    const response = await todoController.addTodo(req.body);
    res.send(response);
  });
  app.put("/updateTodo", async (req, res) => {
    const response = await todoController.updateTodo(req.body);
    res.send(response);
  });
  app.delete("/deleteTodo", async (req, res) => {
    const id = req.query.ID;
    const response = await todoController.deleteTodo(id);
    res.send(response);
  });
};

module.exports = todoRoutes;
