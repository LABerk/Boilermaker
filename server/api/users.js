const router = require("express").Router();

// matches GET requests to /api/puppies/
router.get("/", function (req, res, next) {
  /* etc */
});
// matches POST requests to /api/puppies/
router.post("/login", async function (req, res, next) {
  try {
    res.send({ token: await User.authenticate(req.body) });
  } catch (err) {
    next(err);
  }
});
// matches PUT requests to /api/puppies/:puppyId
router.put("/:userId", function (req, res, next) {
  /* etc */
});
// matches DELETE requests to /api/puppies/:puppyId
router.delete("/:userId", function (req, res, next) {
  /* etc */
});

module.exports = router;
