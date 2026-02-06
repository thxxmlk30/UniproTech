// TODO: Service Model
// Developer: [ASSIGNED_DEV]
// Schema: title, description, icon, createdAt
const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String, default: 'fa-code' }
}, { timestamps: true });

module.exports = mongoose.model('Service', serviceSchema);

