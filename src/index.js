const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config/config");

let server;

// TODO: CRIO_TASK_MODULE_UNDERSTANDING_BASICS - Create Mongo connection and get the express app to listen on config.port
mongoose
  .connect(config.mongoose.url)
  .then(() => console.log("Connected to database at ", config.mongoose.url))
  .catch((err) => console.log(err));


const PORT = config.port;

app.listen(PORT, () => {
  console.log(`Server has started to listen on ${PORT} ... `);
});
