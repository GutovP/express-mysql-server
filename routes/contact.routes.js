const express = require('express');
const router = express.Router();

const contact = require('../services/contact-form.service');

router.post('/api/contact', contact.contactForm);

module.exports = router;
