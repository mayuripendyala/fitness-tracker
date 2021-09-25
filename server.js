const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const PORT = process.env.PORT || 3000;

// Create Express app
const app = express();

app.use(express.urlencoded({ extended : true}));
app.use(express.json());

app.use(express.static("public"));

// Create mongoose database connection
mongoose.connect(proces.env.MONGODB_URL || "mongodb://localhost/firnesstracker",{
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useCreateIndex : true,
    useFindAndModify : false
});

//routes
app.use(require("./routes/api-routes.js"));
app.use(require("./routes/html-routes.js"));


app.listen(PORT, () =>{
    console.log(`App tunning on port ${PORT}`);
})