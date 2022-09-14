const express = require('express');
const authRouter = require('./routes/authRouter');
const verifyToken = require('./middlewares/verifyToken').verifyToken;
const cors = require('cors');
const fileUpload = require("express-fileupload");
const fileRouter = require("./routes/fileRouter");
const checkerRouter = require("./routes/checkerRouter");
const { default: mongoose } = require('mongoose');
const connectDB = require('./Config/connectMongo');
const adminRouter = require('./routes/adminRouter')
require('dotenv').config();
// console.log(process.env)

//connect to database
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 8888;

app.get("/", (req, res) => {
    res.send("SC-Quokka presents");
});

app.use("/auth", authRouter);
app.use("/admin", adminRouter);

app.use(verifyToken);

app.use(fileUpload());
app.use("/file", fileRouter);
app.use("/check", checkerRouter);

mongoose.connection.once('open', () => {
    console.log("Connected to MongoDB");
    app.listen(port, (error) => {
        if (!error)
            console.log("Server is Successfully Running, and App is listening on port " + port);
        else
            console.log("Error occurred, server can't start", error);
    }
    );
});

