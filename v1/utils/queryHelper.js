const dbConnection = require("../../config/dbConnect");
const queryHelper = async (query) => {
  let data;
  await new Promise((resolve, reject) => {
    dbConnection.query(query, (err, response) => {
      if (err) console.log(err);
      data = response;
      resolve();
    });
  });
  return data;
};
module.exports = queryHelper;
