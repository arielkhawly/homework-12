const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql");

let app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
let PORT = process.env.PORT || 8080;

let connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "hellogoodbye",
  database: "office_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });