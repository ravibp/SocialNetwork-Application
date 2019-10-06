const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");
const gravatar = require('gravatar');
const User = require('../../models/User');

// @route GET api/users
// @desc Get user route
// @access Public
router.get('/', (req,res)=> {
    console.log("aaaaa",res )
    res.send('Fetched Users')
});

// @route POST  api/users
// @desc Add User route
// @access Public
router.post(
  "/",
  [
    check("name", "Name is required")
      .not()
      .isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please Enter password with 6 or more characters"
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
      console.log("bbbbb")
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      });
    }
    const { name, email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if(user) {
          res.status(400).json({
              errors: [{msg : 'User already exists'}]
          })
      }
      const avatar = gravatar.url(
          email, {
              s: '200',
              r: 'pg',
              d: 'mm'
          }
      )
    // Create an instance of user
    user = new User({
        name,email,avatar,password
    })
    // Encrpyt password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt)
    await user.save();
    // Return jsonwebtoken
    res.send('User registered');
    } catch(err) {
        console.log(err.message);
        res.status(500).send('Server error');
        
    }
  }
);

module.exports = router;
