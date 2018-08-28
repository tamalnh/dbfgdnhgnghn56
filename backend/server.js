const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./api/config/config')
const bodyParser = require('body-parser')
const postRoute = require('./api/route/postRoute')
const App = express();



// PORT
const PORT = process.env.PORT || 3030;

// DATABASE CONNECT
mongoose.connect(config.url, {
    useNewUrlParser: true
}).then( () => {
    console.log('Database Connected Successfully!')
}).catch(err => {
    console.log(`Database Connection Faild: ${err}`)
})
mongoose.Promise = global.Promise // defaine mongoose promise as global promise


// MIDDELWARES
App.use(cors())
App.use(bodyParser.urlencoded({extended: false}))
App.use(bodyParser.json())

// API ROUTE
App.use('/api/posts', postRoute)


/**
|--------------------------------------------------
| ERROR HANDLING
|--------------------------------------------------
*/

// 404
App.get((req, res, next) => {
    const err = new Error('Not Found!')
    err.status = 404
    next(err)
})
// 500
App.get((err, req, res, next) => {
    res.status(err.status || 500)
    res.json({
        error: err
    })
})


App.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
    console.log(`URL http://localhost:3030/api/posts`)
})