const transporter = require('../config/contact-form.config');

function contactForm(req, res) {
  const { name, email, subject, message } = req.body;

  const mailOptions = {
    from: `${email}`,
    to: 'petar@gutov.net',
    subject: `${subject}`,
    html: `<h3>You got a message from</h3>
    <h4>Name:</h4> ${name}
    <br>
    <h4>Message:</h4> ${message}`,
  };

  transporter.sendMail(mailOptions, (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result);
  });
}

module.exports = {
  contactForm,
};
