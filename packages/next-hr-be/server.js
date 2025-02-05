const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/leaveRequests", require("./routes/leaveRequests"));
// app.use("/api/accommodation", require("./routes/accommodation"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
