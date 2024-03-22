const express = require('express')
const os = require('os')

const app = express()

app.get('/', (req, res) => {
  res.send("Hello from Node! Wonderful: "+os.hostname())
})

app.listen(3000, () => {
  console.log('App listening on port 3000!')
})
