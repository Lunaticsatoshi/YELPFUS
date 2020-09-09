require('dotenv').config;
const express = require('express');


const app = express();

app.get('/waifus', (req,res) => {
    res.json({
        status: 'sucess',
        waifu: 'shinobu',
    })
})

const port = process.env.PORT || 3004;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})