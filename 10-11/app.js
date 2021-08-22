const express = require('express')
const app = express()
const port = 3000
const route = require('./routes')


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(route)


app.listen(port, () => {
  console.log(`I Love U ${port}`)
})