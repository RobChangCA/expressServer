const dbConnection = require("../../config/dbConnect");
const queryHelper = async (app, query) => {
  const myQuery = await dbConnection.query(query, async (err, response) => {
    return app.send(response);
  });
};
module.exports = queryHelper;
