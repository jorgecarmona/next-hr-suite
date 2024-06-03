const mongoose = require("mongoose");

const AccommodationSchema = new mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
  type: {type: String, required: true},
  description: {type: String, required: true},
  status: {type: String, enum: ["Pending", "Approved", "Denied", "Rejected"], default: "Pending"}
});

module.exports = mongoose.model("Accommodation", AccommodationSchema);
