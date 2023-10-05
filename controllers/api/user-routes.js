const router = require("express").Router();

// GET login page
// http://localhost:3001/api/users/login
router.get("/login", async (req, res) => {
  try {
    const data = "You have reached the login page!";
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST create account
// http://localhost:3001/api/users/create
router.post("/create", async (req, res) => {
  try {
    const createAccount =
      "This page will be where a user can create an account!";
    res.status(200).json(createAccount);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// POST on forum

module.exports = router;
