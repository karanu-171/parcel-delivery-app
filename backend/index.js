const express = require('express')
const cors = require('cors')
const connectDb = require('./config/db')
const userRoutes = require('./routes/userRoutes')
const parcelRoutes = require('./routes/parcelRoutes')

// connect to db
connectDb();

const app = express()

app.use(cors())
app.use(express.json())

require('dotenv').config();

app.use('/user', userRoutes)
app.use('/parcel', parcelRoutes)

const port = process.env.PORT || 4000


app.listen(port, ()=>{
    console.log(`server running on port ${port}`)
})