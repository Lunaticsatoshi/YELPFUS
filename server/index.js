require('dotenv').config;
const express = require('express');
const morgan = require('morgan');


const app = express();

app.use(express.json());

//Routes
const {getWaifus, getWaifu, addWaifu, updateWaifu, deleteWaifu} = require('./routes/waifus');

//Get All resturants
app.get('/api/v1/getWaifus', getWaifus);

//Get a Single Waifu
app.get('/api/v1/getWaifus/:waifuid', getWaifu);

//Add A waifu
app.post('/api/v1/waifus', addWaifu);

//Update waifus
app.put('/api/v1/waifus/:id', updateWaifu);

//Delete Waifus
app.delete('/api/v1/waifus/:id', deleteWaifu);

const port = process.env.PORT || 3004;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})