const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/admin", adminRouter)
app.use("/user", userRouter)
app.get("/", (req, res) => res.json({msg: "hello world after the class"}));

// Connect to MongoDB
// DONT MISUSE THIS THANKYOU!!
mongoose.connect('mongodb+srv://diptohaq771:diptohaq771@cluster0.vhaoodf.mongodb.net/courses', { useNewUrlParser: true, useUnifiedTopology: true, dbName: "courses" });

if (mongoose.connection) {
    console.log('Connected to MongoDB');
} else {
    console.log('Error connecting to MongoDB');
}

app.listen(3000, () => console.log('Server running on port 3000'));
