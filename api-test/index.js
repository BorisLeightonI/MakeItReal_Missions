const express = require("express");
const cors = require('cors')

const app = express();
const port = process.env.PORT || 8080;


app.use(express.json())
app.use(cors())

app.get('/', (req, res)=>{
  res.status(200).json({message:'ok', data:'ok'})
})

app.listen(port, () => {
  console.log(`✅ Server listening on port ${port}!`)
})
