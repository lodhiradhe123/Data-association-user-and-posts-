var express = require("express");
var router = express.Router();
const userModel = require("./users");
const postModel = require("./post");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.get("/allusers", async function (req, res, next) {
  let allusers = await userModel
    .findOne({ _id: "65e66f74a9a22f90be942736" })
    .populate("posts");
  res.send(allusers);
});
router.get("/createuser", async function (req, res, next) {
  const createduser = await userModel.create({
    username: "RamradheRam",
    password: "ram",
    posts: [],
    email: "radhe123456@gmail.com",
    fullname: "radhe-lodhi-1",
  });
  res.send(createduser);
});

router.get("/createpost", async function (req, res, next) {
  const createdpost = await postModel.create({
    postText: "hello everyone kese hoa sabhi !",
    user: "65e66f74a9a22f90be942736",
  });
  let user = await userModel.findOne({ _id: "65e66f74a9a22f90be942736" });
  user.posts.push(createdpost._id);
  await user.save();
  res.send("done");
});

module.exports = router;
