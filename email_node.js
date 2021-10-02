var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'sender_email@gmail.com',
        pass: 'password'
    }
});

var mailOptions = {
    from: 'your_email@gmail.com',
    to: 'my_friend@gmail.com',
    subject: 'sending email using node',
    text: 'vatsal is a clever programmer'
};

transporter.sendMail(mailOptions,
    function(err, info){
        if (err) {
            console.log(err);
        }
        else {
            console.log('Email sent : ' + info.response);
        }
})