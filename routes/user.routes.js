const express = require('express');
const router = express.Router();
const users = require('../services/user.service');

//get users
router.get('/api/users', users.getAll);
//register user
router.post('/api/register', users.register);
//login user
router.post('/api/login', users.login);
//logout user
router.get('/api/logout', users.logout);
//get user profile
router.get('/api/profile/:id', users.getProfileInfo);
//edit user profile
router.put('/api/edit/:id', users.editProfileInfo);

module.exports = router;
