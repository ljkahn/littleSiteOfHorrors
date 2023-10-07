const router = require("express").Router();
const { Movie, Review } = require('../../models');

// /movies get all poster images
// http://localhost:3001/movies/
router.get('/movies', async (req, res) => {
    console.log(posterData);
    try {
      const posterData = await Movie.findAll({
        // Selecting only the 'poster_url' attribute
        attributes: ['poster_url'], 
      });
  
 
    const poster = posterData.map((movie) => movie.get({ plain: true }));

    res.render('searchResults', { poster });
  } catch (err) {
    res.status(500).json(err);
  }
  });


  // get posters for oneSearchResult
  router.get('/movies', async (req, res) => {

    try {
      
      const posterData = await Movie.findByPk(req.params.id, {
        attributes: {
         title: movie.title,
         director: movie.director,
         year: movie.release_year,
         rating: movie.rating,
        }
      })
      const poster = posterData.map((movie) => movie.get({ plain: true }));

    res.render('oneSearchResult', { poster });
  } catch (err) {
    res.status(500).json(err);
  }
  });

// /movies/:id generate title on page
router.get('/movies/:id', async (req, res) => {
    try {
      const movieId = parseInt(req.params.id);
      const movie = await Movie.findByPk(movieId);
  
      if (!movie) {
        res.status(404).send('Movie not found');
      } else {
        res.render('oneSearchResult', { title: movie.title });
      }
    } catch (error) {
      console.error('Error fetching movie title:', error);
      res.status(500).send('An error occurred while fetching the movie title.');
    }
  });


// /movies/:id generate director on page
router.get('/movie/:id', async (req, res) => {
    try {
      const movieId = parseInt(req.params.id);
      const movie = await Movie.findByPk(movieId);
  
      if (!movie) {
        res.status(404).send('Movie not found');
      } else {
        res.render('oneSearchResult', { title: movie.director });
      }
    } catch (error) {
      console.error('Error fetching movie director:', error);
      res.status(500).send('An error occurred while fetching the movie director.');
    }
  });


// /movies/:id generate year on page
router.get('/movie/:id', async (req, res) => {
    try {
      const movieId = parseInt(req.params.id);
      const movie = await Movie.findByPk(movieId);
  
      if (!movie) {
        res.status(404).send('Movie not found');
      } else {
        res.render('oneSearchResult', { title: movie.release_year });
      }
    } catch (error) {
      console.error('Error fetching release year:', error);
      res.status(500).send('An error occurred while fetching the release year.');
    }
  });

// /movies/:id generate summary on page
router.get('/movie/:id', async (req, res) => {
    try {
      const movieId = parseInt(req.params.id);
      const movie = await Movie.findByPk(movieId);
  
      if (!movie) {
        res.status(404).send('Movie not found');
      } else {
        res.render('oneSearchResult', { title: movie.description });
      }
    } catch (error) {
      console.error('Error fetching movie year:', error);
      res.status(500).send('An error occurred while fetching the movie year.');
    }
  });

// /movies/:id generate rating /spooky scale on page
router.get('/movie/:id', async (req, res) => {
    try {
      const movieId = parseInt(req.params.id);
      const movie = await Movie.findByPk(movieId);
  
      if (!movie) {
        res.status(404).send('Movie not found');
      } else {
        res.render('oneSearchResult', { title: movie.rating });
      }
    } catch (error) {
      console.error('Error fetching movie rating:', error);
      res.status(500).send('An error occurred while fetching the movie rating.');
    }
  });


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
// // http://localhost:3001/api/users/movies/:id
router.post('/movie/:id', async (req, res) => {
  try {
    const userFavorite = await Profile.findByPk(req.params.id,
      {
        where: {
          id: req.params.id
        },
        
      })

      res.redirect('/profile')
  } catch {


  }
})

module.exports = router;