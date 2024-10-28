const mongoose = require("mongoose");

const recurrenceSchema = new mongoose.Schema({
  frequency: {
    type: String,
    enum: ["daily", "weekly", "monthly", "yearly"],
    default: null,
  },
  interval: { type: Number, default: 1 }, // Every X days/weeks/months/years
  daysOfWeek: { type: [String], default: [] }, // e.g., ['Monday', 'Wednesday']
  dayOfMonth: { type: Number, default: null }, // e.g., 2nd of each month
  nthWeekdayOfMonth: { type: String, default: null }, // e.g., 'Second Tuesday'
  startDate: { type: Date, default: null },
  endDate: { type: Date, default: null },
});

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
  isRecurring: { type: Boolean, default: false },
  recurrence: { type: recurrenceSchema, default: null },
});

module.exports = mongoose.model("Task", taskSchema);
