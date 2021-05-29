const express= require('express');
const router = express.Router();
const {signup , signin , resetpassword  , postforgotpassword}  = require('../controller/usercontroller');
router.post('/signup',signup);
router.post('/signin',signin);
router.post('/postforgotpassword',postforgotpassword);
router.post('/resetpassword',resetpassword);
module.exports = router;