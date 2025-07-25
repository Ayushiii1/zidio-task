const mongoose = require('mongoose');
const fileSchema = new mongoose.Schema({
  filename: String,
  fileType: String,
  uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  uploadedAt: { type: Date, default: Date.now },
  dataPreview: [Object] // Store some preview rows
});
module.exports = mongoose.model('File', fileSchema);