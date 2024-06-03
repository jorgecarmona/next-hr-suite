const mongoose = require("mongoose");

const LeaveRequestSchema = new mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
  startDate: {type: Date, required: true},
  endDate: {type: Date, required: true},
  reason: {type: String, required: true},
  status: {type: String, enum: ["Pending", "Approved", "Denied", "Rejected"], default: "Pending"}
});

module.exports = mongoose.model("LeaveRequest", LeaveRequestSchema, "leave-requests");
