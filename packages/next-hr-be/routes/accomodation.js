const express = require("express");
const {check, validationResult} = require("express-validator");
const auth = require("../middleware/auth");
const Accommodation = require("../models/Accommodation");

const router = express.Router();

// Create an accommodation request
router.post(
  "/",
  [auth, [check("type", "Type is required").not().isEmpty(), check("description", "Description is required").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array()});
    }

    const {type, description} = req.body;

    try {
      const newAccommodation = new Accommodation({
        user: req.user.id,
        type,
        description
      });

      const accommodation = await newAccommodation.save();
      res.json(accommodation);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

// Get all accommodations for a user
router.get("/", auth, async (req, res) => {
  try {
    const accommodations = await Accommodation.find({user: req.user.id});
    res.json(accommodations);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
