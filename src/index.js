const express = require('express');
const nodemailer = require('nodemailer');

require('dotenv').config();


const app = express();


app.get('/sendmail', async (req, res) => {
    const transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        auth: {
          user: process.env.MAIL_AUTH_USER,
          pass: process.env.MAIL_AUTH_PASS
        }
    })

    const mailsent = await transporter.sendMail({
        text: 'Email Text',
        subject: 'Email subject',
        from: 'Mikael Ribeiro <mikaelrsimoes19@gmail.com>',
        to: ['mikaelrsimoes19@gmail.com']
    });

    return res.send(mailsent).json();
})

app.listen(3000, () => console.log('Server is running'));