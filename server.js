const express = require("express");
const app = express();
const connectDB = require("./config/db");
const userRoute = require("./routes/api/users");
const profileRoute = require("./routes/api/profile");
const postsRoute = require("./routes/api/posts");
const authRoute = require("./routes/api/auth");
// connect database
connectDB();

// Initi Middleware
app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("API Running"));

// api routes
app.use("/api/users/", userRoute);
app.use("/api/profile/", profileRoute);
app.use("/api/posts/", postsRoute);
app.use("/api/auth/", authRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
