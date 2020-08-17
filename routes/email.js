"use strict"

const express = require('express');
const router = express.Router();
const nodemailer = require("nodemailer");

router.post('/', async (req, res, next) => {
  const userMail = '...@outlook.com'
  const userName = ''
  const passMail = ''

  let transporter = nodemailer.createTransport({
    host: "SMTP.office365.com",
    port: 587,
    tls: {
      ciphers: 'SSLv3'
    },
    secure: false, // true for 465, false for other ports
    auth: {
      user: userMail, // generated ethereal user
      pass: passMail // generated ethereal password
    }
  })

  let html = `Body mail`

  await transporter.sendMail({
    from: `"${userName}" <${userMail}>`, // sender address
    to: "...@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    html: html // html body
  })

  res.send({
    msg: 'Email enviado com sucesso'
  });
});

module.exports = router;