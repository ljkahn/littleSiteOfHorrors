//VARIABLE DECLARATIONS
const favoriteBtn = $('#add-to-fav');







//FUNCTIONS
//Click "Add to Favorites" and movie adds to users favorites
const handleAddToFavorite = (event) => {
  console.log("hello");

  $.ajax({
    url: '/api/users/movie/:id',
    method: "POST",
  })
.then(() => {
  console.log("This movie has been added to your favorites")
})
}







//EVENT HANDLERS

favoriteBtn.on("click", handleAddToFavorite);