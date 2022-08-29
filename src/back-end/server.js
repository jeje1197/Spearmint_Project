const express = require('express')
const PORT = 3000

const app = express()
const BASE_URL = 'http://jeje1197.pythonanywhere.com'
app.get(BASE_URL + '/', (req, res) => {
    
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})