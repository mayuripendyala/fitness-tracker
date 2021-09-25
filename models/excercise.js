const mongoose = require ("mongoose");

// Mongoose Schema
const schema = mongoose.Schema;

// Create new workout schema
const WorkoutSchema = new Schema ({
    day: {
        type: Date,
        default: Date.now()
    },
    exercise :[{
        name : {
            type: String,
            trim: true,
            require: "Please Enter Exercise name"
        },
        type: {
            type: String,
            trim: true,
            require: "Please Enter Exercise type"
        },
        distance : {
            type:Number
        },
        duration: {
            type:Number,
            require:"Please Enter Exercise duration"
        },
        weight:{
            type:Number
        },
        sets :{
            type:Number
        },
        reps: {
            type:Number
        }
    }]
    
});

// Create mongoose model 'workout' and apply workout schema to that model
const  Workout = mongoose.model("workout", WorkoutSchema);

// Export workout model
model.export = Workout;