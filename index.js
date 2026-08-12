import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();

app.use(cors())
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message:"Hello there!" });
})

const PORT = process.env.PORT || 5051

app.listen(PORT, () => {
    console.log("Listening to Port: " + PORT);
})
