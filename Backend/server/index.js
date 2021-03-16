const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const { response } = require("express");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "gamedb",
    //port: "3306",
});

app.get("/", (req, res) => {
    res.send("ola");
});

app.post("/teste/vai", (req, res) => {

    const win = req.body.Winner
    const play = req.body.Plays
    const sqlInsert = "INSERT INTO play (winner, p1, p2, p3, p4, p5, p6, p7, p8, p9) VALUES (?,?,?,?,?,?,?,?,?,?);";
    db.query(sqlInsert, 
        [win, 
        play[0], 
        play[1], 
        play[2], 
        play[3], 
        play[4], 
        play[5], 
        play[6], 
        play[7], 
        play[8]], 
        (err, result) => {
        console.log(err);
    });
});

app.get("/get-info/:id", (req, res) => {
  const _id = req.params.id
    db.query("SELECT * FROM play WHERE id = ?", [_id], (err, result) => {
      if (err) {
        //console.log(err);
        res.send(result);
      } else {
        res.send(result);
      }
    });
  });

app.listen(3001, () => {
    console.log("Running on Port 3001");
});