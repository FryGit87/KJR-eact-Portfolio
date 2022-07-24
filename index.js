const express = require('express')

const path = require('path')
const PORT = process.env.PORT || 5000
const app = express()

// Serve static files from the React app
app.use(express.static(path.join(__dirname, +'/public')))

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
)
