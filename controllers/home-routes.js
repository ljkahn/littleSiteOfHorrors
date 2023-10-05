const router = require("express").Router();

// GET landing page
// http://localhost:3001/
router.get("/", async (req, res) => {
  try {
    const data = "You have reached the landing page!";
    res.render('homepage', {data});
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET all movie results
// http://localhost:3001/movies/
router.get("/movies", async (req, res) => {
  try {
    const data = "You have reached the all movies page!";
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET one search result
// http://localhost:3001/movies/:id
router.get("/movies/:id", async (req, res) => {
  try {
    const data = "This page should return one movie!";
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET user profile
// http://localhost:3001/profile
router.get("/profile", async (req, res) => {
  try {
    const data = "This page should return user profile!";
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
  // ADD AUTHENTICATION:
  // This page should only be viewable if the user is logged in
});

// GET edit profile page
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
// http://localhost:3001/profile
router.put("/profile", async (req, res) => {
  try {
    const data = "This action should allow the user to edit their profile!";
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
  // ADD AUTHENTICATION:
  // This page should only be viewable if the user is logged in
});

// GET discussion page
// http://localhost:3001/forum
router.get("/forum", async (req, res) => {
  try {
    const data = "This page should return the forum!";
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
  // ADD AUTHENTICATION:
  // This page should only be viewable if the user is logged in
});

// POST on forum
// http://localhost:3001/forum
router.post("/create", async (req, res) => {
  try {
    const postForum = "This action will let a user post on the forum!";
    res.status(200).json(postForum);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
  // ADD AUTHENTICATION:
  // This page should only be viewable if the user is logged in
});

module.exports = router;
