 const router = require("express").Router();

 // Import workout model
 const db = require("../models/excercise");


 router.get ("/api/workouts",  (req, res) =>{

    db.find()
            .then((dbData) =>{
                res.json(dbData);
            })
            .catch((err) =>{
                res.json(err);
            });

 });
