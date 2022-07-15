
const bodyParser = require('body-parser')
const express=require('express')
const app=express()
require('dotenv').config()
const W_app=require('./helper/whatsapp_send_messages')
const PORT=process.env.PORT

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
 

app.get('/',(req,res)=>{
    res.send('hello word !')
})

app.post  ('/whatsapp',async(req,res)=>{

    let message=req.body.Body;
    let sendersId=req.body.From;
    console.log(message);
    console.log(sendersId);
    await W_app.sendMessage('hello From this side ',sendersId)

})
app.listen(PORT,()=>console.log(`SERVER IS RUNNING AT PORT :: ${PORT}`))