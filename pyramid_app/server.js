const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const ThreeSeed = require('./models/two.js');
const app = express()
app.use(express.urlencoded({extended: true}))

app.use(methodOverride('_method'))

app.get('/one/new', (req, res)=>{
    res.render('new.ejs')
})



// app.get('/ones/pyramid', (req, res) => {
//     res.render('pyramid.ejs')
//  })


app.get('/ones/pyramid', (req, res) => {
    ThreeSeed.find().sort({"pyramid":1}).then((allThrees) => {
        res.render('pyramid.ejs', { allThrees: allThrees });
    });
});



app.get('/ones', (req,res)=>{
    ThreeSeed.find({}).then((allThrees )=> {
        res.render('index.ejs', {
            ThreesSeed:allThrees
        })
    })
})



app.get('/ones/:id/edit', (req,res)=>{
    ThreeSeed.findById(req.params.id).then((foundThrees)=>{
        res.render('edit.ejs', {
            ThreesSeed:foundThrees 
        })
    })
})



app.get('/ones/:id/edit', (req,res)=>{
    ThreeSeed.findById(req.params.id).then((foundThrees)=>{
        res.render('edit.ejs', {
            ThreesSeed:foundThree
        })
    })
})


app.put('/ones/:id', (req, res) => {
    ThreeSeed.findByIdAndUpdate(req.params.id, req.body, {new: true}).then((updatedThreeSeed) => {
        res.redirect('/ones')
    })
})


app.post('/one', (req, res)=>{
    ThreeSeed.create(req.body).then((createdThreeSeed)=>{
        res.redirect('/ones')
    })
})

app.delete('/ones/:id', (req, res) => {
    ThreeSeed.findByIdAndRemove(req.params.id).then(() => {
       res.redirect('/ones')
    })
  })



 

mongoose.connect('mongodb://localhost:27017/basiccrud').then(() => {
   console.log('conneciton with mongo established')
})

app.listen(3000, () => {
   console.log('listening')
})