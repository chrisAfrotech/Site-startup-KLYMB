// https://zellwk.com/blog/crud-express-mongodb/

var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/'

MongoClient.connect(url, function (err, db) {
  if (err) throw err
  var dbo = db.db('game_of_thrones')
  dbo.collection('characters').find({}).toArray(function (err, result) {
    if (err) throw err
    console.log(result)
    db.close()
  })
})

const express = require('express')
const app = express()
const port = 3000

// body parser to retrieve informations
app.use(express.urlencoded({ extended: true }))

app.get('/tamo', (req, res) => {
  res.sendFile(__dirname + '/ma_page.html')
})

// test mongodb
app.get('/database', (req, res) => {
  res.send(dbo.collection('characters')).fin
})

app.post('/quotes', (req, res) => {
  res.send(req.body.name)
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
