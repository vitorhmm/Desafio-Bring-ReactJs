const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const { response } = require("express");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));


//-----------Local connection variable----------- BEGINNING
// const db = mysql.createPool({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "gamedb",
//     //port: "3306",
// });
//-----------Local connection variable----------- END




//-----------Online connection variable----------- BEGINNING
const db = mysql.createPool({
  host: "becdbn3ew4b3on9mogt2-mysql.services.clever-cloud.com",
  user: "uvepn5xefjp3mi5c",
  password: "NwkeoJC84AzByCa4M5Fv",
  database: "becdbn3ew4b3on9mogt2",
  port: "3306",
});

/*
 Online MySql server hosted by https://www.clever-cloud.com/en/
 */

//-----------Online connection variable----------- END

app.get("/", (req, res) => {
    res.send("server online");
});

app.post("/save", (req, res) => {

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

app.listen(process.env.PORT || 3001);

//test
