const userController = require("../controllers/userController.js");
const userRoutes = (app) => {
  app.get("/getUsers", async (req, res) => {
    let response = await userController.getUsers();
    res.send(response);
  });
  app.post("/createUser", async (req, res) => {
    let response = await userController.createUser(req.body);
    res.send(response);
  });
  app.put("/updateUser", async (req, res) => {
    let response = await userController.updateUser(req.body);
    res.send(response);
  });
  app.delete("/deleteUser", async (req, res) => {
    const id = req.query.ID;
    let response = await userController.deleteUser(id);
    res.send(response);
  });
};

module.exports = userRoutes;
