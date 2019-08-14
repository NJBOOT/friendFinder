let express = require("express");
let path = require("path");
let bodyParser = require("body-parser")


let app = express();
let PORT = process.env.PORT || 8080

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.text());
// app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// ROUTING
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });