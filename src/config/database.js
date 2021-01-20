module.exports = {
  development: {
    username: "postgres",
    password: "postgres",
    database: "todoApp",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  test: {
    username: "root",
    password: "null",
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    username: "root",
    password: "null",
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql"
  }
}