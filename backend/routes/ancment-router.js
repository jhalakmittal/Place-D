const express= require("express");
const router = express.Router();
const { adminMiddleware, requiresignin } = require('../middleware/index');
const Announcement= require("../modules/announcements");
router.use(express.json());
router.post('/create',requiresignin,adminMiddleware,(req, res, next) => {
    Announcement.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
    })
    });
router.route('/').get((req, res) => {
    Announcement.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})
router.route('/edit/:id').get((req, res) => {
    user.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


router.put("/update/:id", (req, res) => {
    Announcement.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      (err, post) => {
        if (err) return res.status(400).json({ success: false, err });
        return res.status(200).json({ success: true });
      }
    );
  });
  router.route('/:id').get((req,res)=>{
    let id=req.params.id;
    Announcement.findById(id,function(err,post){
        if(err) return res.json({success:false,error:err});
        return res.json({success:true,post,id});
    })
})

router.route('/delete/:id').delete((req, res, next) => {
    Announcement.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})
module.exports=router;