const express = require('express');
var app = express();
var http = require('http').Server(app);

app.use(express.static(__dirname + '/www'));
app.use(express.json());

let server = http.listen(3000, function() {
 
    console.log("Server listening on port 3000");

});


// Routes

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/www/form.html');
});

app.get('/account', function(req, res) {
    res.sendFile(__dirname + '/www/account.html');
});

// array to hold user data

var users = [
  { email: "123@gmail.com", password: "123456" },
  { email: "user2@test.com", password: "password2" },
  { email: "admin@domain.com", password: "adminpass" }
];


// API endpoint to handle form submission

app.post('/api/dataform', function(req, res) {

    if (!req.body) {
        console.log("No data received");
        return res.status(400);
    }

    var customer = {}
    customer.email = req.body.email;
    customer.password = req.body.password;
    if (req.body.email === "123@gmail.com" && req.body.password === "123456") {
        customer.valid = true;
        console.log("Login successful for " + customer.email);
    } else {
        customer.valid = false;
        console.log("Login failed for " + customer.email);
    }
    res.send(customer);
});

