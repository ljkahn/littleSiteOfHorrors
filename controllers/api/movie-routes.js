const router = require("express").Router();
const { Movie } = require('../../models');

// /movies get all poster images
// http://localhost:3001/movies/
app.get('/movies', async (req, res) => {
    try {
      const posterData = await Movie.findAll({
        // Selecting only the 'movie_url' attribute
        attributes: ['poster_url'], 
      });
  
      // Extracting movie URLs from the result
      const posterUrl = posterData.map((movie) => movie.poster_url);
  
      res.render("book_list", { title: "Book List", book_list: allBooks });
    } catch (error) {
      console.error('Error fetching movie URLs:', error);
      res.status(500).json({ error: 'An error occurred while fetching movie URLs' });
    }
  });



// /movies/:id generate title on page

// /movies/:id generate director on page


// /movies/:id generate year on page

// /movies/:id generate summary on page

// /movies/:id generate rating /spooky scale on page

// /movies/:id create modal for user reviews to save to reviews

// /movies/:id generate reviews from reviews table


module.exports = router;