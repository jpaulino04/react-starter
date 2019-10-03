const express   = require("express");
const app    = express();
const path      = require('path');

// Connect Database
// connectDB();

//Init Middleware
app.use(express.json({ extended: false }));
app.use(express.static('client/build'));


const PORT = process.env.PORT || 5000;

// app.get('/', (req, res) => res.send('API Running'));


//Define routes
app.use('/', require('./routes/api/'))


app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
})



app.listen(PORT, ()=>  console.log(`Server started on ${PORT}`))