const express = require('express')
const app = express()

app.post('/login', (req, res) => {
    res.send('ruta de login nueva')
})

app.post('/signin', (req, res) => {
    res.send('ruta de sign in nueva')
})

app.listen(3000, (req, res) => {
    console.log('Listening')
})