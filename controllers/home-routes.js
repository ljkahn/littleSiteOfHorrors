const { Movie, Review, FavMovies, Profile, User } = require("../models");

const router = require("express").Router();


<<<<<<< HEAD
//get login 
// router.get("/login", async (req, res) => {
//   const data = "You have reached the login page!";
//       res.render('login', {data}); //don't know if this should be {data}}
// });
=======
>>>>>>> main
// GET landing page
// http://localhost:3001/
router.get("/", async (req, res) => {
  try {
    const data = "You have reached the landing page!";
    res.render("homepage", { data });
  } catch (err) {
    res.status(500).json(err);
  }
});


// GET landing page carousel movies 
//http://localhost:3001/

// GET all movie results
// http://localhost:3001/movies/
router.get("/movies", async (req, res) => {
  try {
    const posterData = await Movie.findAll({
      // // Selecting only the 'poster_url' attribute
      attributes: ['poster_url'], 
      raw: true,
    });
console.log(posterData)

  // const poster = posterData.map((movie) => movie.get({ plain: true }));
  // console.log(poster)
    // const data = "You have reached the all search page!";
    // const allMoviesData = await movies.findAll();
    res.render('searchResults', {posterData});
  } catch (err) {
    res.status(500).json(err);
  }
});



  // get posters, title, director, release_year, description, and rating for oneSearchResult
  router.get('/movies/:id', async (req, res) => {
    console.log("id", req.params.id)
  
    try {
      
      const movieData = await Movie.findByPk(req.params.id, {
          // include: [Movie],
          attributes: ['poster_url', 'title', 'director', 'release_year', 'description', 'rating'],
          raw: true,
    });
      // if(movieData) {
      // const poster = posterData.get({ plain: true });
        console.log(movieData)
      res.render('oneSearchResult', { ...movieData });
  // } else {
  //   res.status(404)
  // }
  } catch (err) {
    console.log(err)
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
router.get("/profile", async (req, res) => {
  try {
    const profile = await Profile.findByPk(1, {
      raw: true,
      // include: [FavMovies]
    })
    console.log(profile);
    res.render('userProfile', {...profile});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
  // ADD AUTHENTICATION:
  // This page should only be viewable if the user is logged in
});

// GET edit profile page
// http://localhost:3001/profile/edit
router.get("/profile/edit", async (req, res) => {
  try {
    const data = "This page should return a profile page that can be edited!";
    res.render('profileEdit', {data})
  } catch (err) {
    res.status(500).json(err);
  }
  // ADD AUTHENTICATION:
  // This page should only be viewable if the user is logged in
});

//GET login page 
// http://localhost:3001/login
router.get('/login', async (req,res) => {
  try {
    const data = "This should present the login page!";
    res.render('login', {data})
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET create account page 
// http://localhost:3001/create
router.get('/create', async (req,res) => {
  try {
    const data = "This should present the create account page!";
    res.render('newAccount', {data})
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
