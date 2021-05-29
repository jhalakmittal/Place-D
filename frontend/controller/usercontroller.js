const router = express.Router();
var User = require('../../backend/modules/user');
router.post('/signup', (req, res, next) => {
    const username = req.body.Username,
    const email = req.body.Email,
    const password = req.body.password,
    const course = req.body.Course,
    const year = req.body.year
    const userr = new User({
        username,
        email,
        password,
        course,
        year
    });
    userr.save((error , data)=>{
        if(error){
            return res.status(400).json({
                message : error
            })
        }
        if(data){
            return res.status(201).json({
                user : data
            })
        }

    });

});