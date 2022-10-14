require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const formData = require('./utils/formData')

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('tiny'))

app.set('port', process.env.PORT);

app.post('/', formData, (req,res)=>{
  console.log('Este es el nuevo body', req.body);
  res.status(200).json({...req.body})
})

app.listen(app.get('port'), ()=>console.log('running on port', app.get('port')) )