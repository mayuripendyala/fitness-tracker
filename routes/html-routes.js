// Import Express router
const router = require("express").Router();

// Import path
const path = require("path");

// GET Request : Fitness Tracker Home page
router.get("/",(req,res) => {
    res.sendFile(path.join(__dirname,"../public/index.html"));
});

// GET Request ; Exercise page
router.get("/exercise", (req,res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

// GET Request : Stats Page
router.get("/stats" ,(req,res) => {
    res.sendFile(path.join(__dirname,"../public/stats.html"));
});


module.exports = router;