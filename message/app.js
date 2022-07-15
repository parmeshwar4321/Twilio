
require('dotenv').config()
// const PORT = process.env.PORT


const {sendText}=require('./helper/text_messager')

sendText('hello brother','+919076388126')
.then(message=>{
console.log(message.body);
})
.catch(er=>console.log(er))