const express = require("express");
const todoController = require("./src/controller/TodoController");
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get("/todos", todoController.get);
app.get("/todos/create", todoController.create);
app.get("/todos/edit/:id", todoController.edit);
app.get("/todos/status/:status", todoController.getStatus);
app.get("/todos/:id", todoController.getById);
app.post("/todos", todoController.store);
app.post("/todos/update/:id", todoController.update);
app.get("/todos/delete/:id", todoController.delete);

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