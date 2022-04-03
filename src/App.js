import React from "react";
import "./App.css";
import MovieList from "./MovieList";
import FavoriteList from "./FavoriteList";

class App extends React.Component {
  state = {
    movies: [
      {
        id: 1,
        name: "titanic1",
        rating: 2,
        genres: "Romantic",
        directorName: "Stephen",
        releaseYear: 2000,
        description: "nicely done",
      },
      {
        id: 2,
        name: "titanic2",
        rating: 3,
        genres: "Romantic2",
        directorName: "StephenA",
        releaseYear: 2001,
        description: "nicely done1",
      },
      {
        id: 3,
        name: "titanic3",
        rating: 4,
        genres: "Romantic3",
        directorName: "StephenB",
        releaseYear: 2009,
        description: "nicely done2",
      },
      {
        id: 4,
        name: "titanic4",
        rating: 2,
        genres: "Romantic4",
        directorName: "StephenC",
        releaseYear: 2020,
        description: "nicely done3",
      },
    ],
    showMovies: 1,
    favorites: []
  };

  showHide = () => {
    this.setState({ showMovies: !this.state.showMovies });
  };

addToFavorite =(favorite)=> {
  const favorites = this.state;
  if(!favorites.some(alreadyfavorite => alreadyfavorite.id===favorite.id)){
    this.setState({ favorites: [...favorites, favorite]})

  }
}

  // showDetails = () => {
  //   this.setState({ showMovies: !this.state.showMovies });
  // };

  render() {
    //const { showMovies, movies } = this.state;
    const {  movies, favorites } = this.state;
   

//     const listMovies = movies.map(movie => {
//            return movie.rating > 5 ? (      
//         <div>
//           <p> name: {movie.name}</p>
//           <p>rating: {movie.rating}</p>
//           <p>genres: {movie.genres}</p>

//         </div>
//       ) : null;
//     });

//     const detailMovie = movies.map(movie => {
//       return  (      
//    <div>
//      <p>name: {movie.name}</p>
//      <p>rating: {movie.rating}</p>
//      <p>genres: {movie.genres}</p>
//      <p>director: {movie.director}</p>
//      <p>releaseYear: {movie.releaseYear}</p>
//      <p>description: {movie.description}</p>

//    </div>
//  ) 
// });




    return (
      <div className="App">
       <MovieList movies={movies} addToFavorite ={this.addToFavorite}/>
       <FavoriteList favorites ={favorites}/>
       {/* {showMovies && (<p>{listMovies}</p>)}
       {showMovies && (<p>{detailMovie}</p>)}


        <button onClick={this.showHide}> ShowHideMovies</button>
        <button onClick={this.showHide}> Details</button> */}

      </div>
    );
  }
}
export default App;
