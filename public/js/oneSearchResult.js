//VARIABLE DECLARATIONS
const favoriteBtn = $('#add-to-fav');

//FUNCTIONS
//Click "Add to Favorites" and movie adds to users favorites
const handleAddToFavorite =  async (event) => {
  console.log("hello");
  
  const movie_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
 const apiUrl = `/api/movies/${movie_id}`
  //in variable response - is the method 
 const response = await fetch (apiUrl, {
  method: 'POST',
 });
 //once the server is finsihed with the routes, on the server, we find user and add a new table to favMovies thru table
 //what do I want to do now ??

 //send user to profile page !!!

 if (response.ok) {
  window.location.reload('/profile')
  //redirect sends the user to the page and making a get request 
 } else {

 }

}









//EVENT HANDLERS

favoriteBtn.on("click", handleAddToFavorite);