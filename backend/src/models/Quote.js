// TODO: Quote Model (Quote requests)
// Developer: [ASSIGNED_DEV]
// Schema: companyName, email, serviceType, details, status, createdAt
const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  email: { type: String, required: true },
  serviceType: { type: String, required: true },
  details: { type: String, required: true },
  status: { type: String, enum: ['pending', 'reviewed', 'accepted', 'rejected'], default: 'pending' }
}, { timestamps: true });

module.exports = mongoose.model('Quote', quoteSchema);

