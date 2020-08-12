let express = require('express')
let db = require('../models')
let router = express.Router()

router.get("/", (req, res) => {
  db.category.findAll()
  .then(categories => {
    res.render('categories/index', {categories: categories})
  }).catch(err=>{console.log("error", err)})
})

module.exports = router