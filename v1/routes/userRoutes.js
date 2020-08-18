const userController = require("../controllers/userController.js");
const userRoutes = (app) => {
  app.get("/getUsers", async (req, res) => {
    try {
      await userController.getUsers(res).then((result, callback) => {
        console.log("result callback", callback);
        console.log("result route", result);
      });
    } catch (err) {
      console.log("this is err from routes", err);
    }
  });
};

module.exports = userRoutes;
