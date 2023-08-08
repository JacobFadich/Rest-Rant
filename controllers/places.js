const router = require('express').Router()
const places = require('../Models/places.js')

router.get('/new', (req, res) => {
    res.render('places/new')
})

router.post('/', (req, res) => {
   
  places.push(req.body)
  res.redirect('POST /places')
})



router.get('/', (req, res) => {
    res.render('places/index', {places})
})
  
  

module.exports = router
