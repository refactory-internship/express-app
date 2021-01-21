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

app.get("/todo", todoController.get);
app.get("/todo/create", todoController.create);
app.get("/todo/edit/:id", todoController.edit);
app.get("/todo/status/:status", todoController.getStatus);
app.get("/todo/:id", todoController.getById);
app.post("/todo", todoController.store);
app.post("/todo/update/:id", todoController.update);
app.get("/todo/delete/:id", todoController.delete);

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