require("dotenv").config()
const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const { connect } = require("./database")
const { auth } = require("./utils/auth")
const userRouter = require("./api/user.route")
const User = require("./api/user.model")


const port = process.env.PORT;
const app = express()
connect()

app.use(express.json())
app.use(cors())
app.use(morgan("tiny"))

app.use("/auth/local", userRouter)
app.get("/", auth, async (req, res) => {
  // const { userId } = req.params // Esta ya no es la forma
  const userId = req.user
  const authUser = User.findById(userId);
  res.status(200).json({ data: {...authUser} })
})


app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`)
})