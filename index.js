//@ts-check
/** Import of express */
const express = require("express");
/** Constant to use express()*/
const app = express();


// Settings
app.set("port", process.env.PORT || 3000);

app.use(express.json());

// Routes
app.use("/api/products", require("./src/routes/products"));
app.use("/api/categories", require("./src/routes/categories"));

// Static files
app.use("/", express.static("./src/front"))


// Starting the server
app.listen(app.get("port"), ()=>{
    console.log("Server on port", app.get("port"));
});