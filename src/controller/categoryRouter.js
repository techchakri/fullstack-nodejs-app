const express = require('express')
const {getData} = require("./dbController");
const categoryRouter = express.Router()

/*
const Category = [
    {
        id: 1,
        category: "Fashion",
        thumb: "https://i.ibb.co/56VP0Fn/cloths.jpg"
    },
    {
        id: 2,
        category: "Electronics",
        thumb: "https://i.ibb.co/pw5Wtdx/appliances.jpg"
    },
    {
        id: 3,
        category: "Essentials",
        thumb: "https://i.ibb.co/0cw34xm/essentials.jpg"
    },
    {
        id: 4,
        category: "Footwear",
        thumb: "https://i.ibb.co/r3SZq8S/footware.jpg"
    }
]*/

function router(menu) {
    categoryRouter.route("/").get(async function (req, res) {
        let query = {};
        let data = await getData('category', query)
        // res.send(Category)
        // res.render("category",{title:"Category Page",data:Category,menu})
        res.render("category",{title:"Category Page",data:data,menu})
    })
    
    categoryRouter.route("/details").get(function (req, res) {
        res.send("Hiii From Category Details Route")
    })

    return categoryRouter;
    
}

module.exports = router;
