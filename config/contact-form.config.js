const nodemailer = require('nodemailer');

const auth = require('../auth/mail');

const transporter = nodemailer.createTransport({
  host: auth.host,
  port: auth.port,
  secure: auth.secure,
  auth: {
    user: auth.user,
    pass: auth.pass,
  },
});

module.exports = transporter;
