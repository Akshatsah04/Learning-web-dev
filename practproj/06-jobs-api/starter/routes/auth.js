const express = require('express')
const router = express.Router()

const {login , register} = require('../controllers/auth')


router.post('/login' , login)
router.route('/register').patch(register)


module.exports = router