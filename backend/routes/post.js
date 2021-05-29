const router = require("express").Router();
const { Post } = require("../modules/Post");
const { adminMiddleware, requiresignin } = require('../middleware/index');

router.post('/',requiresignin,adminMiddleware,(req, res, next) => {
  Post.create(req.body, (error, data) => {
      if (error) {
          return next(error)
      } else {
          console.log(data)
          res.json(data)
      }
  })
  });

// router.post("/",(req, res) => {
//   const post = new Post(req.body);
//   post.save((err) => {
//     if (err) return res.status(400).json({ success: false, err });
//     return res.status(200).json({ success: true });
//   });
// });

router.get("/", (req, res) => {
  Post.find().exec((err, posts) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true, posts: posts });
  });
});

router.get("/detail/:id", (req, res) => {
  let id = req.params.id;

  Post.findById(id, function (err, post) {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, post });
  });
});

router.put("/update/:id",requiresignin,adminMiddleware, (req, res) => {
  Post.findByIdAndUpdate(
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

router.delete("/delete/:id",requiresignin,adminMiddleware, (req, res) => {
  Post.findByIdAndRemove(req.params.id).exec((err, deleteItem) => {
    if (err) {
      res.send(err);
    }
    return res.json(deleteItem);
  });
});

module.exports = router;