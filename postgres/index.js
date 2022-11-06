const express = require('express');
const cors = require('cors');
const userRouter = require('./routes/user.routes');
const interapiRouter = require('./routes/interapi.routes');
const { urlencoded } = require('express');
const PORT = process.env.PORT || 8000




const app = express();


app.use(express.static('./public/images'));
app.use(cors());
app.use(express.json())
app.use(urlencoded(true))


app.use('/api', userRouter)
app.use('/api', interapiRouter)

app.listen(PORT, () => {console.log(`Listening ${PORT}`)});

