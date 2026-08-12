import "dotenv/config";

// ------------------------------------

import express from "express";
import path from "node:path";
const app = express();

const currentDirectory = import.meta.dirname;

app.set("views", path.join(currentDirectory, "views"));
app.set("view engine", "ejs");

// ------------------------------------

import router from "./routes/routes.js"

// ------------------------------------

app.use(express.json());

app.use("/", router);

const PORT = process.env.PORT || 5051

app.listen(PORT, () => {
    console.log("Listening to Port: " + PORT);
})
