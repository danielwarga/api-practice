const express = require("express");

const app = express();

const menu = {
    starters: ["garlic bread", "beef carpaccio", "olives"],
    mains: ["burger and chips", "steak", "fish of the day"],
    desserts: ["ice cream", "pancakes", "creme brulee"],
    specials: {
        "monday": "dover sole",
        "tuesday": "porterhouse steak"
    }
}

app.get("/", (req, res) => {
    res.json({
        "name": "Chez Norbert",
        "establishment": 2019,
        "status": "open",
        "hygiene-rating": 10
    })
})

app.get("/menu", (req, res) => {
    // res.send("Here is the menu!")
    res.json(menu)
})

//  /specials/monday
//  /specials/tuesday
// ...
app.get("/specials/:day", (req, res) => {

    const day = req.params.day;

    const special = menu["specials"][day];

    if (special){
        res.json({
            "specials":special
        });
    }else {
        res.status(404).json({
            "specials": null,
            "succes": false
        })
    }

    res.send(console.log(`Here are the specials for ${day}.`));

})

module.exports = app;
