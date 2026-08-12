import express from "express";
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];


router.get("/", (req, res) => {
    // res.render({ title: "Mini Messageboard", messages: messages });
    res.render("views")
})

router.get("/new", (req, res) => {

})

export default router;
