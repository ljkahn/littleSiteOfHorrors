//VARIABLE DECLARATIONS
const favoriteBtn = $('#add-to-fav');








//FUNCTIONS
//Click "Add to Favorites" and movie adds to users favorites
const handleAddToFavorite = (event) => {
  console.log("hello");
  
  const movie_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  $.ajax({
    url: `/api/movies/${movie_id}`,
    method: "POST",
  })
  .done(() => {
    window.location.href='/profile'
  })
.then(() => {
  console.log("This movie has been added to your favorites", movie_id
  )
})
}







//EVENT HANDLERS

favoriteBtn.on("click", handleAddToFavorite);