const express = require("express");
const app = express();
const router = express.Router();

const path = require("path");

app.use(express.static(__dirname+"/client/dist/"));
router.use('/', express.static(__dirname+"/client/dist/", { redirect: false }));

app.get('*', (req, res)=>{
    // res.send('Hello World!');
    res.sendFile(path.join(__dirname+'/client/dist/index.html'));
  });
  
  app.listen(5000, ()=>{
    console.log("Listening on 5000");
  });