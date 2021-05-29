const express= require('express');
const router = express.Router();
const { adminMiddleware, requiresignin } = require('../middleware/index');
const {addexperience }  = require('../controller/interviewexp');
const {getexperience }  = require('../controller/interviewexp');
const {updateexperience }  = require('../controller/interviewexp');
const {deleteexperience }  = require('../controller/interviewexp');
router.post('/addexperience',requiresignin,adminMiddleware,addexperience);
// router.post('/addexperience',addexperience);
// router.post('/addexperience',addexperience);
router.get('/getexperience',getexperience);

router.patch('/updateexperience/:id',requiresignin,adminMiddleware,updateexperience);
router.delete('/deleteexperience/:id',requiresignin,adminMiddleware,deleteexperience);
module.exports = router;
