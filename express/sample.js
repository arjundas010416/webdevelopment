const express=require('express')
const path=require('path')
const app=express()


app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'sample.html'))
})

app.post('/sample',function(req,res)
{
    res.send('Submitted')
})

app.get('/about',(req,res)=> res.send('about'))

app.listen(3000,function()
    {
        console.log(" server started")
    }
) 