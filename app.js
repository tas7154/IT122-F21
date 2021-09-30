// imports
const express = require('express')
const app = express()
const port = 3000


// Static Files
app.use(express.static('Week 02/public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

// Set views
app.set('views', './Week 02/views')
app.set('view engine', 'ejs')

app.get('', (req, res) => {
  //res.sendFile(__dirname + "/Week 02/views/index.html")
  //res.send('Hell World')
  res.render('index', { text: 'This is EJS' })
})

app.get('/about', (req, res) => {
  res.render('about', { text: 'About Page' })
})



// Listen on port 3000
app.listen(port, () => console.log(`Listening on port ${port}`))