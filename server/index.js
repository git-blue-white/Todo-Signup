const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.listen(PORT, () => {
  console.log('Server listening on ${PORT}');
});

app.get("/", (req, res) => {
  res.json({ message: "Hello from server!" });
});

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

app.post("/savedata", (req, res) => {
  const {email, fullname, username, password} = req.body;
  MongoClient.connect(url, function(err, db) {
    var state = 0;
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = { email: email, fullname: fullname, name: username, pass: password };
    dbo.collection("customers").find({}).toArray(function(err, result) {
      if (err) throw err;
      for (const i in result) {
        if(email === result[i].email)
          {state = 1; break;}
      }
      if (state === 0)
      {
        dbo.collection("customers").insertOne(myobj, function(err, res) {
          if (err) throw err;
          console.log("1 document inserted");
          db.close();
        });
        res.json({state: 1});
      }
      else
        res.json({state: 0});
    });
    
  });
});

app.post("/login", (req, res) => {
  const {username, password, state} = req.body;
  var resstate = 0;
  var fullname;
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("customers").find({}).toArray(function(err, result) {
      if (err) throw err;
      for(var i = 0; i < result.length; i++)
      {
        if(username === result[i].name && password === result[i].pass)
          //console.log("cor");
          {
            resstate = 1;
            fullname = result[i].fullname;
            break;
          }
      }
      if (resstate === 0)
        res.json({state: 0});
      else
        res.json({state: 1, fullname: fullname});
      db.close();
    });
    /*const cursor = dbo.collection('customers').find({
      name: username,
      pass: password
    });*/
  });
  console.log(username, password);
});