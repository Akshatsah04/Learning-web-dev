const express = require('express')
const router =express.Router()

const {login , dashboard}=require('../controllers/main')
const authenticationmiddleware = require('../middleware/auth')


router.route('/dashboard').get(authenticationmiddleware,dashboard)
router.route('/login').post(login)

module.exports = router