const express   = require("express");
const app    = express();

// Connect Database
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

const PORT = process.env.PORT || 3000;

//Define routes
app.use('/', require('./routes/api/'))



app.listen(PORT, ()=>  console.log(`Server started on ${PORT}`))