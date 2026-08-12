import express from "express";
import cors from "cors";
import "dotenv/config";
import router from "./routes/routes.js"

const app = express();

app.use(cors())
app.use(express.json());

// app.get("/", (req, res) => {
//     res.json();
// })

app.use("/", router);

const PORT = process.env.PORT || 5051

app.listen(PORT, () => {
    console.log("Listening to Port: " + PORT);
})
