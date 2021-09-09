const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;


app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(require('express-session')({
    secret: 'shhhhhh',
    resave: false,
    saveUninitialized: true,

}));

app.get('/', (req, res) => {
  res.render("index")
})
app.get('/contact', (req, res) => {
  res.render("contact")
})
app.get('/about', (req, res) => {
  res.render("about")
})

app.listen(PORT, () => {
    console.log("SERVER START Listining port:" + PORT);
})