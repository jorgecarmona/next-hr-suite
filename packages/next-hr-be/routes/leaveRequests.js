const express = require("express");
const {check, validationResult} = require("express-validator");
const auth = require("../middleware/auth");
const LeaveRequest = require("../models/LeaveRequests");

const router = express.Router();

// Create a leave request
router.post(
  "/",
  [
    auth,
    [
      check("startDate", "Start date is required").not().isEmpty(),
      check("endDate", "End date is required").not().isEmpty(),
      check("reason", "Reason is required").not().isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array()});
    }

    const {startDate, endDate, reason} = req.body;

    try {
      const newLeaveRequest = new LeaveRequest({
        user: req.user.id,
        startDate,
        endDate,
        reason
      });

      const leaveRequest = await newLeaveRequest.save();
      res.json(leaveRequest);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

// Get all leave requests for a user
router.get("/:userId", async (req, res) => {
  try {
    const leaveRequests = await LeaveRequest.find({user: req.params.userId});
    res.json(leaveRequests);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
