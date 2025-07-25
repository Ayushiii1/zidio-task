const express = require('express');
const router = express.Router();
const File = require('../models/File');

// Upload metadata (simulate, no binary upload here)
router.post('/upload', async (req, res) => {
  const { filename, fileType, uploadedBy, dataPreview } = req.body;
  const file = new File({ filename, fileType, uploadedBy, dataPreview });
  await file.save();
  res.status(201).json({ msg: 'File metadata saved.' });
});

// Get files for dashboard stats
router.get('/stats/:userId', async (req, res) => {
  const userId = req.params.userId;
  const files = await File.find({ uploadedBy: userId });
  // Compose stats
  const totalUploads = files.length;
  const fileTypes = {};
  files.forEach(f => {
    fileTypes[f.fileType] = (fileTypes[f.fileType] || 0) + 1;
  });
  res.json({ totalUploads, fileTypes, recent: files.slice(-5) });
});

// Get all files for reports
router.get('/all/:userId', async (req, res) => {
  const userId = req.params.userId;
  const files = await File.find({ uploadedBy: userId });
  res.json(files);
});

module.exports = router;