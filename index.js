import cors from "cors";
import "dotenv/config";

import router from "./routes/routes.js"
import path from "node:path";

// ------------------------------------

import express from "express";
const app = express();

app.set("view engine", "ejs");

// ------------------------------------

app.use(cors())
app.use(express.json());

app.use("/", router);

const PORT = process.env.PORT || 5051

app.listen(PORT, () => {
    console.log("Listening to Port: " + PORT);
})
