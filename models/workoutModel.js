const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  // CODE HERE
  type: {
    type: String,
    trim: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  numExercises: {
    type: Number
  },
  totalDuration: {
    type: Number
  },
  totalWeight: {
    type: Number
  },
  totalSets: {
    type: Number
  },
  totalReps: {
    type: Number
  },
  totalDistance: {
    type: Number
  },
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
