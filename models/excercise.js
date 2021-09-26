const mongoose = require ("mongoose");

// Mongoose Schema
const Schema = mongoose.Schema;

// Create new workout schema
const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },
    exercises: [
        {
          type: {
            type: String,
            trim: true,
          },
          name: {
            type: String,
            trim: true,
          },
          duration: Number,
          weight: {
            type: Number,
            default: 0
          },
          reps: {
            type: Number,
            default: 0
          },
          sets: {
            type: Number,
            default: 0
          },
          distance: {
            type: Number,
            default: 0
          }
        }
      ],
      totalDuration: {
        type: Number,
        default: 0,
      }
    
    
});

// Create mongoose model 'Workout' and apply workout schema to that model
const  Workout = mongoose.model("Workout", WorkoutSchema);

// Export workout model
module.export = Workout;