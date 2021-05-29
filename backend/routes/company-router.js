const express= require("express");
const router = express.Router();
const { adminMiddleware, requiresignin } = require('../middleware/index');
const Company= require("../modules/company");
const app=express();
router.post('/create',requiresignin,adminMiddleware,(req, res, next) => {
    Company.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
    })
});
router.route('/:id').get((req,res)=>{
    let id=req.params.id;
    Company.findById(id,function(err,post){
        if(err) return res.json({success:false,error:err});
        return res.json({success:true,post,id});
    })
})
router.route('/').get((req, res) => {
    Company.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})
router.put("/update/:id",requiresignin,adminMiddleware, (req, res) => {
    Company.findByIdAndUpdate(
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

router.route('/edit/:id').get((req, res) => {
    Company.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})
router.delete('/delete/:id',requiresignin,adminMiddleware,(req, res, next) => {
    Company.findByIdAndRemove(req.params.id, (error, data) => {
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