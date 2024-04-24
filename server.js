const express = require('express')
const dbConnect = require('./dbConnect')
const cors = require('cors');

const app = express()


app.use(cors());

const port = 5000

const newsRoute = require('./routes/newsRoute')
const userRoute = require('./routes/userRoute')

app.use(express.json())
app.use('/api/newsitems/', newsRoute)
app.use('/api/users/', userRoute)

app.get('/', (req, res) => res.send('Hello User'))
app.listen(port, () => console.log(`Server App listening on port ${port}`))