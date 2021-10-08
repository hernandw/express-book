const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/entrada", (req, res) =>{
    res.render("new-entry");
}); 

router.post('/new-entry', (req, res)=>{
  console.log(req.body);
  res.send('received')
});

router.use((req, res, next) => {
  res.status(404).send("404 Not Found");
});

module.exports = router;
