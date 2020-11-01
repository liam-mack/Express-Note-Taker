const path = require("path");


// HTML Routing is limited to the two pages provided. "*" path directs "Wildcard" routes (ex: /asdasd) to homepage.

module.exports = function(app) {
    app.get("/notes", (req, res) => {res.sendFile(path.join(__dirname, "../public/notes.html"))});

    app.get("*", (req, res) => {res.sendFile(path.join(__dirname, "../public/index.html"))});
};