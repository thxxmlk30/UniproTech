// TODO: Project Model
// Developer: [ASSIGNED_DEV]
// Schema: title, description, category, status, image, createdAt
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, enum: ['Web', 'Mobile', 'IA'], required: true },
  status: { type: String, enum: ['Completed', 'In Progress', 'Planned'], default: 'In Progress' },
  image: { type: String },
  technologies: [{ type: String }],
  link: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);

