const express = require("express");
const app = express();
const port = 3000;

app.use(express.json())

app.get("/", (req, res) => {
  res.send("Hi there I am Anmol Sinha!!-Home");
});
app.get("/about", (req, res) => {
  res.send("Hi there I am Anmol Sinha!!-About");
});
app.post("/form",(req,res)=>{
    console.log(req.body)
    res.send(req.body)
})
app.get("/this",(req,res)=>{
    res.status(404).send("You are not on right place!!")
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});