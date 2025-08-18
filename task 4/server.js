const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/task4login", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Schema
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});
const User = mongoose.model("User", userSchema);

// Create a test user
async function createTestUser() {
  const existing = await User.findOne({ email: "test@example.com" });
  if (!existing) {
    const hashed = await bcrypt.hash("123456", 10);
    await User.create({
      username: "testuser",
      email: "test@example.com",
      password: hashed,
    });
    console.log("Test user created: test@example.com / 123456");
  }
}
createTestUser();

// Login route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.json({ status: "fail", message: "Invalid credentials" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.json({ status: "fail", message: "Invalid credentials" });

  res.json({ status: "success", message: "Login successful" });
});

app.listen(5000, () => console.log("Backend running on http://localhost:5000"));
