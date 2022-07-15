const express = require('express')
const voiceResponse = require('twilio').twiml.VoiceResponse;
const accountSid = process.env.TWILIO_ACCOUNT_SID; // Your Account SID from www.twilio.com/console
const authToken = process.env.TWILIO_AUTH_TOKEN;   // Your Auth Token from www.twilio.com/console
require('dotenv').config()
const app = express()
const client = require('twilio')(accountSid, authToken)

// client.calls.create({
//     url: 'http://demo.twilio.com/docs/voice.xml',
//     to: "+919076388126",
//     from: "+17657544627"
// }, (er, call) => {
//     if (er, call) {
//         console.log(er);
//     }
//     else {
//         console.log(call.sid);
//     }

// })


app.post('/voice', (req, res) => {
    const twiml = new voiceResponse();
    twiml.say('hello from this side brother')
    res.type('text/xml')
    res.send(twiml.toString());

})

app.listen(3030)