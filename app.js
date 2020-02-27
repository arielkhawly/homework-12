const express = require("express");
const mysql = require("mysql");

let app = express();

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

// route time
// route for adding into departments
app.get('/', function(req, res){
    if (err) throw err;
    connection.query("INSERT INTO departments (depart_name) VALUES ?")
});
// route for adding into employee
app.get('/', function(req, res){
  if (err) throw err;
  connection.query("INSERT INTO employee (first_name, last_name, role_id, manager_id ) VALUES ?")

});
//route for adding into job
app.get('/', function(req, res){
  if (err) throw err;
  connection.query("INSERT INTO job (title, salary, department_id) VALUES ?")
});
//route for updating



// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });