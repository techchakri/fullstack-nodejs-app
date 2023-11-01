const express = require("express")
const { dbConnect } = require("./src/controller/dbController")
const app = express()
const port = 9101

let menu = [
    {link: "/", name: "Home"},
    {link: "/category", name: "Category"},
    {link: "/products", name: "Products"},
]

const productsRouter = require("./src/controller/productsRouter")(menu)
const categoryRouter = require("./src/controller/categoryRouter")(menu)


// static file path
app.use(express.static(__dirname + "/public"))
// ejs file path
app.set("views","./src/views")
// view engine name
app.set('view engine','ejs')


// default route
app.get("/", function(req,res){
    // res.send("Hiii From Express")
    res.render("index",{title: "Home Page", menu})
});


app.use("/products",productsRouter)
app.use("/category",categoryRouter)



app.listen(port,function(err){
    dbConnect()
    if (err) throw err;
    console.log("Server is running on port "+port)
})