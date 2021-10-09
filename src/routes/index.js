const express = require("express");
const router = express.Router();
const books = [];
router.get("/", (req, res) => {
  res.render("index.ejs", {
    books
  });
  
});

router.get("/entrada", (req, res) =>{
    res.render("new-entry");
}); 



router.post('/new-entry', (req, res)=>{
  const {title, author, image, description} = req.body;
  let newBook = {
    title,
    author,
    image,
    description
  }
  books.push(newBook);
  res.send('received')
});

router.use((req, res, next) => {
  res.status(404).send("404 Not Found");
});

module.exports = router;

console.log(books);