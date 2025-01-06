const express = require('express');
const twilio = require('twilio');
const app = express();

app.use(express.urlencoded({ extended: false })); // To handle form-encoded data

// Route for Twilio to send requests
app.post('/voice', (req, res) => {
    const twiml = new twilio.twiml.VoiceResponse();
    twiml.say('Hello, welcome to our service!'); // Twilio will play this message
    res.type('text/xml');
    res.send(twiml.toString());
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
