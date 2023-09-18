import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "recipe",
});

app.get("/", (req, res) => {
  const q = "SELECT * FROM allcategory";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

app.get("/category/:name", (req, res) => {
  const category = req.params.name;
  const q = "SELECT * FROM category WHERE categorise = ?";
  db.query(q, [category], (err, data)=> {
    console.log(data);
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

app.get("/meal/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const q = "SELECT * FROM detail WHERE idmeal = ?";
  db.query(q, [id], (err, data)=> {
    // console.log(data);
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

app.get("/search/:term", (req, res) => {
  const term = req.params.term +"%";
  console.log(term);
  const q = "SELECT * FROM detail WHERE strMeal like ? or strCategory like ? or strArea like ?";
  db.query(q, [term,term,term], (err, data)=> {
    // console.log(data);
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

app.listen(8800, () => {
  console.log("Connected to backend.");
});
