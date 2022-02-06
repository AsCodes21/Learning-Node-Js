const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

app.use(express.json())

app.use("/static",express.static("static"))//Access static files
app.set('view engine', 'pug')//Set template engine
app.set('views','views')//Set views directory
app.use(express.urlencoded())//Middle helps to get values in backend to express


//ENDPOINTS
app.get('/pug', function (req, res) {
    res.render('demo', { title: 'Hey', message: 'Hello there!',msg2:"Hi there again"})
  }) 
app.get("/", (req, res) => {
    values = {'title':'Jai pubg'}
  res.status(200).render('index',values);
});
app.get('/contact',(req,res)=>{
  res.render('contact')
})
app.post('/contact',(req,res)=>{
  res.render('contact');
  form_name = req.body.name
  email = req.body.email
  password = req.body.password
  console.log(req.body)
  let data = `[name:${form_name},email:${email},password:${password}]`
  fs.writeFileSync("database.txt",data)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});