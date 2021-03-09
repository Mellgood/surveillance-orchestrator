const { json } = require('body-parser')
const express = require('express')
const app = express()
require('dotenv/config')
const startRoute = require('./routes/start')
const stopRoute = require('./routes/stop')


//Middleware routes
app.use(json())
app.use('/start', startRoute)
app.use('/stop', stopRoute)


//Routes
app.get('/', (req, res) => {
    res.status(404).send()
})

//App listen
app.listen(process.env.PORT, function () {
    console.log('Example app listening on port ' + process.env.PORT + '!');
});
