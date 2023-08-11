const router = require('express').Router()
const places = require('../Models/places.js')

router.get('/new', (req, res) => {
    res.render('places/new')
})

router.post('/', (req, res) => {
  res.send('POST /places')
})



router.get('/', (req, res) => {
    res.render('places/index', {places})
})

router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    res.render('places/show', { place: places[id] })

  }
})

  

module.exports = router
