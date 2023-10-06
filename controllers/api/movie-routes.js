const router = require("express").Router();
const { Movie } = require('../../models');

// /movies get all poster images
// http://localhost:3001/movies/
router.get('/movies', async (req, res) => {
    try {
      const posterData = await Movie.findAll({
        // Selecting only the 'movie_url' attribute
        attributes: ['poster_url'], 
      });
  
      // Extracting movie URLs from the result
      const posterUrls = posterData.map((movie) => movie.poster_url);
  
      res.render('searchResults', { posterUrls });
    } catch (error) {
      console.error('Error fetching movie URLs:', error);
      res.status(500).json({ error: 'An error occurred while fetching movie URLs' });
    }
  });



// /movies/:id generate title on page
router.get('/movie/:id', async (req, res) => {
    try {
      const movieId = parseInt(req.params.id);
      const movie = await Movie.findByPk(movieId);
  
      if (!movie) {
        res.status(404).send('Movie not found');
      } else {
        res.render('searchResults', { title: movie.title });
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
        res.render('searchResults', { title: movie.director });
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
        res.render('searchResults', { title: movie.release_year });
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
        res.render('searchResults', { title: movie.description });
      }
    } catch (error) {
      console.error('Error fetching movie year:', error);
      res.status(500).send('An error occurred while fetching the movie year.');
    }
  });

// /movies/:id generate rating /spooky scale on page

// /movies/:id create modal for user reviews to save to reviews

// /movies/:id generate reviews from reviews table


module.exports = router;