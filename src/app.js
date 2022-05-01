const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const hbs = require('hbs');
app.set("view engine", "hbs");

const
static_path = path.join(__dirname, "../public")

const view_path = path.join(__dirname, '../views');

const templet_path = path.join(__dirname, '../templets/views');

const partial_path = path.join(__dirname, '../templets/partials')

app.set("views",view_path)
// console.log(view)

app.set("views" , templet_path);
// we have to register path for navbar 
hbs.registerPartials(partial_path);



app.use(express.static(static_path))

app.get("/", (req,res)=>{
    res.render("index");
})
app.get("/about", (req,res)=>{
    res.render("about");
})
app.get("/weather", (req,res)=>{
    res.render("weather");
})
// err
app.get("*", (req,res)=>{
    res.render("404error" ,{
        errorMassage: 'Opps Page not found'
    });
})

app.listen(port, ()=>{
    console.log(`The port is listing on ${3000}`)
});

// always try to run nodemon src/app.js -e js,hbs
// it will save the dath if error