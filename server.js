const path = require("path");
const express = require("express");
const app =  express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "db")));

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, () => {console.log(`App listening on PORT ${PORT}`)})
