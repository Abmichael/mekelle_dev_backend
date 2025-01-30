const jwt = require("jsonwebtoken");
const { User } = require("../models");

const signToken = (user) => {
  return jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

module.exports = {
  async signup(req, res) {
    try {
      const user = await User.create(req.body);
      return res.status(201).json({ token: signToken(user) });
    } catch (error) {
      return res.status(400).json({ error: "Registration failed" });
    }
  },

  async login(req, res) {
    try {
      const user = await User.findOne({ where: { email: req.body.email } });

      if (
        !user ||
        !(await require("bcryptjs").compare(req.body.password, user.password))
      ) {
        return res.status(401).json({ error: "Invalid credentials" });
      }

      return res.json({ token: signToken(user) });
    } catch (error) {
      return res.status(500).json({ error: "Login failed" });
    }
  },
};
