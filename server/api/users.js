const router = require("express").Router();
const User = require("../db/models/Users.js");

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

//signup route
router.post("/signup", async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.send({ token: await user.generateToken() });
  } catch (err) {
    if (err.name === "SequelizeUniqueConstraintError") {
      res.status(401).send("User already exists");
    } else {
      next(err);
    }
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
