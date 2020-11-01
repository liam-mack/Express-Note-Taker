// Dependencies
// UID used to generate unique ID's 
const fs = require("fs");
const uid = require("uid");
let db = require("../db/db.json")

module.exports = function(app) {

    // API Get - Handles when users visit link, here we only have one route
    app.get("/api/notes", (req, res) => { res.json(db)});

    // API Post - User data submission to server
    app.post("/api/notes", (req, res) => {
        let note = req.body
        console.log(note)
        note.id = uid(6);
        db.push(note);
        fs.writeFileSync("./db/db.json", JSON.stringify(db));
        return res.json(db);
    });

    // API Delete - User data removal request to server
    app.delete("/api/notes/:id", (req,res) => {
        for (let i = 0; i < db.length; i++){
            if(db[i].id == req.params.id) {
                db.splice(i, 1);
                fs.writeFileSync("./db/db.json", JSON.stringify(db));
                res.json(db);
                return;
            }
        }
    });
}