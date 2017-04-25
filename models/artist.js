const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
  artist: { type: String, trim: true },
  title: { type: String, trim: true },
  description: { type: String, trim: true },
  image: { type: String, trim: true },
  lat: { type: String, trim: true, unique: true },
  lng: { type: String, trim: true, unique: true },
  comments: [{
    body: { type: String, trim: true, required: true },
    user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
  }, {
    timestamps: true
  }]
});

module.exports = mongoose.model('Artist', artistSchema);
