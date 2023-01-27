const express = require('express');
const cors = require('cors');
const { petRouter } = require('./routes/pet.routes');

// Environment vars
const port = 8000;

// requiring / importing runs the file!
// This file doesn't need to export anything though, so we need a var.
require('./config/mongoose.config');

// app is a function but it also has key value pairs on it like an object.
const app = express();

/* 
app.use is adding 'middleware':
stuff that happens in the middle of the the request and response.
*/

// avoid CORS error since our front-end is running on a different port
// so our requests are 'cross origin' port 3000 -> 8000
app.use(cors());

// req.body undefined without this!
app.use(express.json());

// Adds all the pet routes with this url prepended to them.
// If we had another model, we'd do the same with that model's routes.
app.use('/api/pets', petRouter);

app.listen(port, () =>
    console.log(`Listening on port ${port} for REQuests to RESpond to.`)
);