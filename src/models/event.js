const mongoose = require('mongoose');
const { Schema } = mongoose;

const EventSchema = new Schema({
  start: { type: String, required: true },
  end: { type: String, required: true },
  description: { type: String, required: true }
});

module.exports = mongoose.model('Event', EventSchema);
