// Just connect to PORT 3000, and also deploy to Heroku

var port = PORT
var express = require('express')
var app = express()
 

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogSchema = new Schema({
  title:  String,
  author: String,
  body:   String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs:  Number
  }
});


















app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000)