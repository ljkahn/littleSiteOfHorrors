const { Movie, Review, FavMovies, Profile, User } = require("../models");
const withAuth = require('../utils/auth');

const router = require("express").Router();

// <<<<<<< HEAD
// //get login
// // router.get("/login", async (req, res) => {
// //   const data = "You have reached the login page!";
// //       res.render('login', {data}); //don't know if this should be {data}}
// // });
// =======
// >>>>>>> main

// GET landing page and random movies to carousel
// http://localhost:3001/
router.get("/", async (req, res) => {
  try {
    const count = await Movie.count();
    const numberOfRandomMovies = 10;
    const randomList = [];
    while (randomList.length < numberOfRandomMovies) {
      const randomIndex = Math.floor(Math.random() * count) + 1;
      if (!randomList.includes(randomIndex)) {
        randomList.push(randomIndex);
      }
    }
    const randomMovies = await Movie.findAll({
      attributes: ["movie_id", "poster_url"],
      raw: true,
      where: {
        movie_id: randomList,
      },
    });
    // console.log(req.session.loggedIn);
    res.render("homepage", {
      randomMovies,
      loggedIn: req.session.loggedIn || false,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET all movie results
// http://localhost:3001/movies/
router.get("/movies", async (req, res) => {
  try {
    const posterData = await Movie.findAll({
      // // Selecting only the 'poster_url' attribute
      attributes: ["movie_id", "poster_url"],
      raw: true,
    });
    console.log(posterData);

    // const poster = posterData.map((movie) => movie.get({ plain: true }));
    // console.log(poster)
    // const data = "You have reached the all search page!";
    // const allMoviesData = await movies.findAll();
    res.render("searchResults", {
      posterData,
      loggedIn: req.session.loggedIn || false,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// get posters, title, director, release_year, description, and rating for oneSearchResult
router.get("/movies/:id", async (req, res) => {
  console.log("id", req.params.id);

  try {
    // console.log("sup");
    const movieData = await Movie.findByPk(req.params.id, {
      // include: [Movie],
      attributes: [
        "movie_id",
        "poster_url",
        "title",
        "director",
        "release_year",
        "description",
        "rating",
      ],
      raw: true,
    });
    // if(movieData) {
    // const poster = posterData.get({ plain: true });
    // console.log(movieData);
    res.render("oneSearchResult", {
      ...movieData,
      loggedIn: req.session.loggedIn || false,
    });
    // } else {
    //   res.status(404)
    // }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one search result
// // http://localhost:3001/movies/:id
// router.get("/movies/:id", async (req, res) => {
//   try {
//     const data = "This page should return one movie!";
//     res.render('oneSearchResult', {data});
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// GET user profile
// http://localhost:3001/profile
router.get("/profile", withAuth, async (req, res) => {
  try {
    const profileData = await Profile.findOne({
      where: {
        user_id:  req.session.user_id
      },
      include: [
            {
              model: Movie,
              attributes: ['title', 'poster_url', 'movie_id']
            },
      ],
    });
    // console.log(profileData);
    if (!profileData) {
      return res.status(404).json({message: 'Profile not found.'});
    }
    // const profile = profileData.map((profile) => profile.get({plain: true}));

    const profile = profileData.get({plain: true});
    console.log(profile);
    res.render("userProfile", {
      profile,
      loggedIn: req.session.loggedIn || false,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

});

// GET edit profile page
// http://localhost:3001/profile/edit
router.get("/profile/edit", withAuth, async (req, res) => {
  try {
    const data = "This page should return a profile page that can be edited!";
    res.render("profileEdit", {
      data,
      loggedIn: req.session.loggedIn || false,
    });
  } catch (err) {
    res.status(500).json(err);
  }
  // ADD AUTHENTICATION:
  // This page should only be viewable if the user is logged in
});

//GET login page
// http://localhost:3001/login
router.get("/login", async (req, res) => {
  try {
    const data = "This should present the login page!";
    res.render("login", { data, loggedIn: req.session.loggedIn || false });
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET create account page
// http://localhost:3001/create
router.get("/create", async (req, res) => {
  try {
    const data = "This should present the create account page!";
    res.render("newAccount", { data, loggedIn: req.session.loggedIn || false });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET discussion page
// http://localhost:3001/forum
// router.get("/forum", async (req, res) => {
//   try {
//     const data = "This page should return the forum!";
//     res.render('discussionForum', {data});
//   } catch (err) {
//     res.status(500).json(err);
//   }
//   // ADD AUTHENTICATION:
//   // This page should only be viewable if the user is logged in
// });

// We need a post route hooked up to the modal on our movies/:id route
// The user will create a review in the modal and we want that to post into the reviews section of movies/:id
// POST on forum
// http://localhost:3001/forum/create
// router.post("/create", async (req, res) => {
//   try {
//     const postForum = "This action will let a user post on the forum!";
//     res.status(200).json(postForum);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
//   // ADD AUTHENTICATION:
//   // This page should only be viewable if the user is logged in
// });

module.exports = router;
