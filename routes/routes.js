import express from "express";
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    id: 0,
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    id: 1,
    added: new Date()
  }
];


router.get("/", (req, res) => {
    res.render("views", { messages: messages });
})


router.get("/new", (req, res) => {
  res.render("forms");
})

router.post("/new", (req, res) => {
    const authorName = req.body.authorName;
    const messageText = req.body.messageText;

    if (authorName.length === 0 || messageText.length === 0) {
        res.render("forms", { error: "Please don't leave any inputs blank." })
    } else {
        messages.push({ 
            text: messageText,
            user: authorName,
            id: messages.length + 1,
            added: new Date()
        })

        res.redirect("/");
    }
})

router.get("/messages/:id", (req, res) => {
    const id = req.params.id;
    const message = messages[id];

    res.render("message", { message: message });
})

export default router;
