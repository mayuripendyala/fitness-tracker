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

 router.post ("/api/workouts/range",(req,res) => {
     db.create(body)
     .then((dbData) =>{
         res.json(dbData);
     })
     .catch((err) =>{
        res.json(err);
    });
 });


 router.get("api/workouts/range",(req,res) => {

    db.find()
            .then((dbData) =>{
                res.json(dbData);
            })
            .catch((err) =>{
                res.json(err);
            });
 });


 router.post("/api/workouts",({ body },res)=>{
            db.create(body)
                        .then((dbData) =>{
                            res.json(dbData);
                        })
                        .catch((err) =>{
                            res.json(err);
                        });

 });


 router.put("/api/workouts/:id", ({body, params }, res)=>{
        db.findByIdAndUpdate(params.id,{$push :{ exercise :body}})
                    .then((dbData) =>{
                        res.json(dbData);
                    })
                    .catch((err) =>{
                        res.json(err);
                    });

 });


 module.exports = router;