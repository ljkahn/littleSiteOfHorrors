const router = require("express").Router();
const { Movie, Review, FavMovies } = require("../../models");

// /movies get all poster images
// http://localhost:3001/movies/
// router.get('/', async (req, res) => {
//     try {
//       const posterData = await Movie.findAll({
//         // Selecting only the 'poster_url' attribute
//         attributes: ['poster_url'], 
//       });
  
 
//     const poster = posterData.map((movie) => movie.get({ plain: true }));
//     console.log(posterData)

//     res.render("searchResults", { poster });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// get posters for oneSearchResult
// router.get("/movies", async (req, res) => {
//   try {
//     const posterData = await Movie.findByPk(req.params.id, {
//       attributes: {
//         title: movie.title,
//         director: movie.director,
//         year: movie.release_year,
//         rating: movie.rating,
//       },
//     });
//     const poster = posterData.map((movie) => movie.get({ plain: true }));

  // // get posters, title, director, release_year, description, and rating for oneSearchResult
  // router.get('/movies/:id', async (req, res) => {

  //   try {
      
  //     const movieData = await Movie.findByPk(req.params.id, {
  //         include: [Movie],
  //         attributes: {poster_url, title, director, release_year, description, rating},
  //         raw: true,
  //   });
  //     // if(movieData) {
  //     // const poster = posterData.get({ plain: true });
  //       console.log(movieData)
  //     res.render('oneSearchResult', { ...movieData });
  // // } else {
  // //   res.status(404)
  // // }
  // } catch (err) {
  //   console.log(err)
  //     res.status(500).json(err);
  //   }
  // });

// // /movies/:id generate title on page
// router.get('/movies/:id', async (req, res) => {
//     try {
//       const movieId = parseInt(req.params.id);
//       const movie = await Movie.findByPk(movieId);
  
//       if (!movie) {
//         res.status(404).send('Movie not found');
//       } else {
//         res.render('oneSearchResult', { title: movie.title });
//       }
//     } catch (error) {
//       console.error('Error fetching movie title:', error);
//       res.status(500).send('An error occurred while fetching the movie title.');
//     }
//   });

  //   if (!movie) {
  //     res.status(404).send("Movie not found");
  //   } else {
  //     res.render("oneSearchResult", { title: movie.title });
  //   }
  // } catch (error) {
  //   console.error("Error fetching movie title:", error);
  //   res.status(500).send("An error occurred while fetching the movie title.");
  // }
// });

// // /movies/:id generate director on page
// router.get('/movie/:id', async (req, res) => {
//     try {
//       const movieId = parseInt(req.params.id);
//       const movie = await Movie.findByPk(movieId);
  
//       if (!movie) {
//         res.status(404).send('Movie not found');
//       } else {
//         res.render('oneSearchResult', { title: movie.director });
//       }
//     } catch (error) {
//       console.error('Error fetching movie director:', error);
//       res.status(500).send('An error occurred while fetching the movie director.');
//     }
//   });

//     if (!movie) {
//       res.status(404).send("Movie not found");
//     } else {
//       res.render("oneSearchResult", { title: movie.director });
//     }
//   } catch (error) {
//     console.error("Error fetching movie director:", error);
//     res
//       .status(500)
//       .send("An error occurred while fetching the movie director.");
//   }
// });

// // /movies/:id generate year on page
// router.get('/movie/:id', async (req, res) => {
//     try {
//       const movieId = parseInt(req.params.id);
//       const movie = await Movie.findByPk(movieId);
  
//       if (!movie) {
//         res.status(404).send('Movie not found');
//       } else {
//         res.render('oneSearchResult', { title: movie.release_year });
//       }
//     } catch (error) {
//       console.error('Error fetching release year:', error);
//       res.status(500).send('An error occurred while fetching the release year.');
//     }
//   });

// // /movies/:id generate summary on page
// router.get('/movie/:id', async (req, res) => {
//     try {
//       const movieId = parseInt(req.params.id);
//       const movie = await Movie.findByPk(movieId);
  
//       if (!movie) {
//         res.status(404).send('Movie not found');
//       } else {
//         res.render('oneSearchResult', { title: movie.description });
//       }
//     } catch (error) {
//       console.error('Error fetching movie year:', error);
//       res.status(500).send('An error occurred while fetching the movie year.');
//     }
//   });

// // /movies/:id generate rating /spooky scale on page
// router.get('/movie/:id', async (req, res) => {
//     try {
//       const movieId = parseInt(req.params.id);
//       const movie = await Movie.findByPk(movieId);
  
//       if (!movie) {
//         res.status(404).send('Movie not found');
//       } else {
//         res.render('oneSearchResult', { title: movie.rating });
//       }
//     } catch (error) {
//       console.error('Error fetching movie rating:', error);
//       res.status(500).send('An error occurred while fetching the movie rating.');
//     }
//   });

//     if (!movie) {
//       res.status(404).send("Movie not found");
//     } else {
//       res.render("oneSearchResult", { title: movie.rating });
//     }
//   } catch (error) {
//     console.error("Error fetching movie rating:", error);
//     res.status(500).send("An error occurred while fetching the movie rating.");
//   }
// });

// /movies/:id create modal for user reviews to save to reviews

// /movies/:id generate reviews from reviews table
// router.get('/movie/:id', async (req, res) => {
//     try {
//       const reviewId = parseInt(req.params.id);
//       const movie = await Review.findByPk(reviewId);

//       if (!review) {
//         res.status(404).send('Review not found');
//       } else {
//         res.render('searchResults', [ title: review.id ]);
//       }
//     } catch (error) {
//       console.error('Error fetching movie year:', error);
//       res.status(500).send('An error occurred while fetching the movie year.');
//     }
//   });

// // POST (add Movie to favorites by ID)
//GOING to need to add in user profile ID (Alex) to traget the spc. user favoriting this movie
// // http://localhost:3001/api/users/movies/:id
router.post("/:id", async (req, res) => {
  try {
    const userFavorite = await FavMovies.create({
      movie_id: req.params.id,
      profile_id: req.session.user_id,
      // movie_id: 5,
      // profile_id: 1,
    });

    res.redirect("/profile");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
