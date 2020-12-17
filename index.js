const exp = require('express')
const data = require('./customer')
const bodyParser = require('body-parser')
const app = exp()
const path = require('path');
const PORT = process.env.PORT || 5000;



app.get('',async function(req,res){
    var d = await data.AllUser()
    res.send(d)
})

app.listen(PORT ,() => {
    console.log(`Server is running. ${PORT}`)
})