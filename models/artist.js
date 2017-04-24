const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
  artist: { type: String, trim: true },
  // artist: { type: String, trim: true, required: true, unique: true },
  title: { type: String, trim: true },
  description: { type: String, trim: true },
  image: { type: String, trim: true },
  lat: { type: String, trim: true },
  lng: { type: String, trim: true }
}, {
  timestamps: true
});

module.exports = mongoose.model('Artist', artistSchema);
