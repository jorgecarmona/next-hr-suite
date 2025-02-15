const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

exports.register = async (req, res) => {
  const {email, password, username} = req.body;

  try {
    let user = await User.findOne({email});

    if (user) {
      return res.status(400).json({msg: 'User already exists'});
    }

    user = await User.findOne({username});

    if (user) {
      return res.status(400).json({msg: 'Username already taken'});
    }

    user = new User({
      email,
      password,
      username,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const payload = {
      user: {id: user.id},
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      {expiresIn: '1h'},
      (err, token) => {
        if (err) throw err;
        res.json({token});
      },
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.login = async (req, res) => {
  const {email, password} = req.body;

  try {
    const user = await User.findOne({email});

    if (!user) {
      return res.status(400).json({msg: 'Invalid credentials'});
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({msg: 'Invalid credentials'});
    }

    const payload = {
      user: {id: user.id},
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      {expiresIn: '1h'},
      (err, token) => {
        if (err) throw err;
        res.json({token});
      },
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
