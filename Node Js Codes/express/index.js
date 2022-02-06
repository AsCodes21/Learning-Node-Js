const express = require("express");
const app = express();
const port = 3000;

app.use(express.json())
//Access static files
app.use("/static",express.static("static"))
//Set template engine
app.set('view engine', 'pug')
//Set views directory
app.set('views','views')

app.get('/pug', function (req, res) {
    res.render('demo', { title: 'Hey', message: 'Hello there!',msg2:"Hi there again"})
  }) 
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