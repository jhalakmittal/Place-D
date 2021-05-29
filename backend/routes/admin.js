const express= require('express');
const router = express.Router();
const {signup  }  = require('../controller/usercontrolleradmin');
const {signin} = require('../controller/usercontrolleradmin');
router.post('/signup',signup);
router.post('/signin',signin);
module.exports = router;