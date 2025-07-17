const mongoose = require('mongoose');

const exibitorRegisterationsModel = new mongoose.Schema({
  companyName: { type: String, required: true },
  contactPerson: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  documentPath: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('ExhibitorRegisteration', exibitorRegisterationsModel);
