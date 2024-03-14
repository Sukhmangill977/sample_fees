const mongoose = require('mongoose');

const feeSchema = new mongoose.Schema({
  month: { type: String, required: true },
  amount: { type: Number, required: true },
  status: { type: String, required: true }
});

module.exports = mongoose.model('Fee', feeSchema);
