const express = require("express");
const app = express();
const port = 3000;

app.use(express.json())

app.use("/static",express.static("static"))//Access static files
app.set('view engine', 'pug')//Set template engine
app.set('views','views')//Set views directory


//ENDPOINTS
app.get('/pug', function (req, res) {
    res.render('demo', { title: 'Hey', message: 'Hello there!',msg2:"Hi there again"})
  }) 
app.get("/", (req, res) => {
    values = {'title':'Jai pubg'}
  res.status(200).render('index',values);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});