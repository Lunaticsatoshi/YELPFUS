require('dotenv').config;
const express = require('express');
const morgan = require('morgan');


const app = express();

//Get All resturants
app.get('/api/v1/getWaifus', (req,res) => {
    res.status(200).json({
        status: 'sucess',
        data: {
            waifu: ['shinobu', 'Mai'],
        }
    })
});

//Get a Single Waifu
app.get('/api/v1/getWaifus/:waifuid', (req,res) => {
    console.log(req.params.waifuid)
})

//Add A waifu
app.post('api/v1/waifus', (req,res) => {})

const port = process.env.PORT || 3004;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})