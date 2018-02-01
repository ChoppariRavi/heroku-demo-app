const express = require("express");
const app = express();
const router = express.Router();

const path = require("path");
const PORT = process.env.PORT || 5000


app.use(express.static(__dirname+"/client/dist/"));
router.use('/', express.static(__dirname+"/client/dist/", { redirect: false }));

app.get('*', (req, res)=>{
    // res.send('Hello World!');
    res.sendFile(path.join(__dirname+'/client/dist/index.html'));
  });
  
  app.listen(PORT, ()=>{
    console.log(`Listening on ${PORT}`);
  });