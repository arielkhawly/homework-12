const express = require("express");
const mysql = require("mysql");
const inquirer = require('inquirer');

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
  runOffice();
  console.log("connected as id " + connection.threadId);
});

// route time !!
function runOffice() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "Add a department, job, or employee",
        "View department, job, or employee",
        "Update department, job, or employee",
        "exit"
      ]
    })
    .then(function(answer) {
      switch (answer.action) {
      case "Add a department, job, or employee":
        addOffice();
        break;

      case "View department, job, or employee":
        viewOffice();
        break;

      case "Update department, job, or employee":
        updateOffice();
        break;

      case "exit":
        connection.end();
        break;
      }
    });
}

// all routes for adding, will be set w/i inquirer 
//route for adding into department
function addOffice() {
app.get('/', function(req, res){
    if (err) throw err;
    connection.query("INSERT INTO departments (depart_name) VALUES ?")
});
runOffice();
}
// route for adding into employee
function viewOffice() {
  app.get('/', function(req, res){
    if (err) throw err;
    connection.query("INSERT INTO employee (first_name, last_name, role_id, manager_id ) VALUES ?")
  
  });
  runOffice();
}

//route for adding into job
function updateOffice() {
  app.get('/', function(req, res){
    if (err) throw err;
    connection.query("INSERT INTO job (title, salary, department_id) VALUES ?")
  });
  runOffice();
}


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });