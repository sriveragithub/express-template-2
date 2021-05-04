const express = require('express')
const app = express()
const port = 3005

app.use(express.json())
app.use(express.urlencoded())

app.use(express.static('client'))

app.get('/ping', (req, res) => {
    res.json('pong')
})

app.listen(port, () => {
    console.log(`API running on port ${port}`)
})