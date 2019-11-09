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

// api routes
app.use("/api/users/", userRoute);
app.use("/api/profile/", profileRoute);
app.use("/api/posts/", postsRoute);
app.use("/api/auth/", authRoute);
// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
