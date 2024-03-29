require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(methodOverride('_method'))
app.use('/places', require('./controllers/places'))
app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => {
  res.render('Home')
})



app.get('/', (req, res) => { 
    res.render('places/index')
  })
  


app.get('*', (req, res) => {
  res.render('error404')
})

app.listen(process.env.PORT)

