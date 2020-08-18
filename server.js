const server = require("./config/express.config");
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`we on port ${PORT}`));
