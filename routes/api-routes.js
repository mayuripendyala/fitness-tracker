 const router = require("express").Router();

 // Import workout model
 const db = require("../models/excercise.js");


 router.get ("/api/workouts",  (req, res) =>{
    db.Workout.find({})
        .then(dbWorkout => {      
            dbWorkout.forEach(workout => {
                var total = 0;
                workout.exercises.forEach(e => {
                    total += e.duration;
                });
                workout.totalDuration = total;

            });

            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        });

 });

 router.post("/api/workouts/range",(req,res) => {
     db.Workout.create(body)
     .then((dbData) =>{
         res.json(dbData);
     })
     .catch((err) =>{
        res.json(err);
    });
 });


 router.get("api/workouts/range",(req,res) => {

    db.Workout.find({})
        .then(dbWorkout => {
            console.log("ALL WORKOUTS");
            console.log(dbWorkout);

            res.json(dbWorkout);
        }).
        catch(err => {
        res.json(err);
        });

 });


 router.post("/api/workouts",({ body },res)=>{
    db.Workout.create(body)
            .then((dbWorkout => {
                res.json(dbWorkout);
            })).catch(err => {
                res.json(err);
            });

 });


 router.put("/api/workouts/:id", ({body, params }, res)=>{

    db.Workout.findOneAndUpdate(
        { _id: req.params.id },
        {
            $inc: { totalDuration: req.body.duration },
            $push: { exercises: req.body }
        },
        { new: true }).then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        });




        // db.findByIdAndUpdate(params.id,{$push :{ exercise :body}})
        //             .then((dbData) =>{
        //                 res.json(dbData);
        //             })
        //             .catch((err) =>{
        //                 res.json(err);
        //             });

 });


 module.exports = router;