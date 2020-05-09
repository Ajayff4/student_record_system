var express = require("express");
var bodyParser = require("body-parser");
var mysql = require("mysql");
var app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'studentdb'
});

con.connect(function (err) {
    if (err) throw err;
})
console.log("Connected!");

//const app = require('./routes');
var port = 8080;
var server = app.listen(port, function (req, res) {
    console.log("Listening at " + port);
});

app.post("/login", (req, res) => {
    // eslint-disable-next-line no-useless-concat
    let sql = "SELECT * FROM student WHERE username=" + "'" + req.body.username + "'" + " AND password=" + "'" + req.body.password + "'";
    con.query(sql, function (err, resp) {
        if (err) {
            console.error("query error in login");
        } else {
            if (resp.length > 0) {
                console.log("login successful.", resp[0].username);
                res.send(JSON.stringify(resp[0]));
            } else {
                res.send(JSON.stringify({}));
            }
        }
    })
});

app.post("/signup", (req, res) => {
    let data = { fullname: req.body.fullname, username: req.body.username, email: req.body.email, password: req.body.password };
    let sql = "INSERT INTO student SET ?";

    con.query(sql, data, function (err, resp) {
        if (err) {
            console.error("query error in signup");
        } else {
            console.log("signup successful");
            res.send(JSON.stringify(res[0]));
        }
    })
});

app.post("/updateProfile", (req, res) => {
    // eslint-disable-next-line no-useless-concat
    let data = { mobile: req.body.mobile, dob: req.body.dob, pincode: req.body.pincode };
    console.log("req body", req.body);
    let sql = "UPDATE student SET ? WHERE username=" + "'" + req.body.username + "'";

    con.query(sql, data, function (err, resp) {
        if (err) {
            console.error("query error in updateProfile");
        } else {
            console.log("profile updated successfully.");
            res.send(JSON.stringify(res[0]));
        }
    })
});

app.post("/profile", (req, res) => {
    // eslint-disable-next-line no-useless-concat
    let sql = "SELECT * FROM student WHERE username=" + "'" + req.body.username + "'";
    con.query(sql, function (err, resp) {
        if (err) {
            console.error("query error in profile");
        } else {
            if (resp.length > 0) {
                console.log("profile data fetched.", resp[0]);
                res.send(JSON.stringify(resp[0]));
            } else {
                res.send(JSON.stringify({}));
            }
        }
    })
});