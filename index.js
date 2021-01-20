const express = require("express");
const todoController = require("./src/controller/TodoController");
const app = express();
const port = 3000;

app.use(express.json());


app.get("/todos", todoController.get);
app.get("/todos/:id", todoController.getById);
app.post("/todos/", todoController.create);
app.put("/todos/:id", todoController.update);
app.delete("/todos/:id", todoController.delete);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


//Testing the connection
// const { Sequelize } = require("sequelize");
// const db = require('./src/config/database');
// const sequelize = new Sequelize(db.development); // Example for postgres

// try {
//   sequelize.authenticate();
//   console.log('Connection has been established successfully.');
// } catch (error) {
//   console.error('Unable to connect to the database:', error);
// }