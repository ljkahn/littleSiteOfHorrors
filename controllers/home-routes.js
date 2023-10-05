const router = require("express").Router();

// GET landing page
// http://localhost:3001/
router.get("/", async (req, res) => {
  try {
    const data = "You have reached the landing page!";
    res.status(200).json(data);
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
// http://localhost:3001/profile
router.post("/create", async (req, res) => {
  try {
    const postForum = "This page will be where a user can post on the forum";
    res.status(200).json(postForum);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
