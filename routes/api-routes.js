 const router = require("express").Router();

 // Import workout model
 const db = require("../models/excercise.js");


 router.get ("/api/workouts",  (req, res) =>{
    db.find({})
        .then(dbWorkout => {      
            dbWorkout.forEach(workout => {
                var total = 0;
                workout.exercises.forEach(e => {
                    total += e.duration;
                });
                workout.totalDuration = total;

            });

            res.status(200).json(dbWorkout);
        }).catch(err => {
            res.status(400).json(err);
        });

 });

 router.post("/api/workouts/range",(req,res) => {
     db.create(body)
     .then((dbData) =>{
        res.status(200).json(dbData);
     })
     .catch((err) =>{
        res.status(400).json(err);
    });
 });


 router.get("/api/workouts/range",(req,res) => {

        db.find({})
        .sort({ day: -1 })
        .then((workout) => {
            // console.log("ALL WORKOUTS");
            // console.log(workout.slice(0,7));

            const sevendayworkout = workout.slice(0,7);

            res.status(200).json(sevendayworkout);
        })
        .catch((err) => {
          res.status(400).json(err);
        });
}); 
    
  
 router.post("/api/workouts",({ body },res)=>{
    db.create(body)
            .then((dbWorkout => {
                res.status(200).json(dbWorkout);
            })).catch(err => {
                res.status(400).json(err);
            });

 });


 router.put("/api/workouts/:id", ({body, params }, res)=>{

    db.findOneAndUpdate(
        { _id: params.id },
        {
            $inc: { totalDuration: body.duration },
            $push: { exercises: body }
        },
        { new: true }).then(dbWorkout => {
            res.status(200).json(dbWorkout);
        }).catch(err => {
            res.status(400).json(err);
        });

 });


 module.exports = router;