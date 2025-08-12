const express = require('express')
const path = require('node:path')
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({ extended: true }))

const emails = []

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/signup', (req, res) => {
    const { email } = req.body


if (email) {
    emails.push(email)
    res.redirect('/success')
}else{
    res.redirect('/')
}
})

app.get('/success', (req, res) => {
    res.render('success') 
})



const PORT = 3000
app.listen(PORT, () => console.log('Está funcionando'))