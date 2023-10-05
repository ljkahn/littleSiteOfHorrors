const router = require("express").Router();

// LOGIN & SIGN UP PAGE

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

// GET create account page
// http://localhost:3001/api/users/create
router.get("/create", async (req, res) => {
  try {
    const data = "You have reached the create account page!";
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST create account
// http://localhost:3001/api/users/create
router.post("/create", async (req, res) => {
  try {
    const createAccount = "This action will let a user create a new account";
    res.status(200).json(createAccount);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// PROFILE PAGE

// GET user profile
// http://localhost:3001/api/users/profile
router.get("/profile", async (req, res) => {
  try {
    const data = "This page should return user profile!";
    //we need to serilaize this "data" to have it return the profile information saved in the profile database that is connected to the particular user logging in
    res.render('userProfile', {data});
  } catch (err) {
    res.status(500).json(err);
  }
  // ADD AUTHENTICATION:
  // This page should only be viewable if the user is logged in
});

// GET edit profile page
// http://localhost:3001/api/users/profile/edit
router.get("/profile/edit", async (req, res) => {
  try {
    const data = "This page should return a profile page that can be edited!";
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
  // ADD AUTHENTICATION:
  // This page should only be viewable if the user is logged in
});

// PUT (edit) user profile
// http://localhost:3001/api/users/profile/edit
router.put("/profile/edit", async (req, res) => {
  try {
    const data = "This action should allow the user to edit their profile!";
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
  // ADD AUTHENTICATION:
  // This page should only be viewable if the user is logged in
});

module.exports = router;
