const express   = require("express");
const app    = express();

// Connect Database
// connectDB();

//Init Middleware
app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5000;

// app.get('/', (req, res) => res.send('API Running'));


//Define routes
app.use('/', require('./routes/api/'))



app.listen(PORT, ()=>  console.log(`Server started on ${PORT}`))