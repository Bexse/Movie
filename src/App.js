import React from "react";
import "./App.css";
import AddMovie from "./AddMovie.js";
import MovieLists from "./MovieLists";
//import FavoriteMovies from "./FavoriteMovies";

export default class App extends React.Component {
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
        isDeleted: 0,
      },
      {
        id: 2,
        name: "titanic2",
        rating: 3,
        genres: "Romantic2",
        directorName: "StephenA",
        releaseYear: 2001,
        description: "nicely done1",
        isDeleted: 0,
      },
      {
        id: 3,
        name: "titanic3",
        rating: 4,
        genres: "Romantic3",
        directorName: "StephenB",
        releaseYear: 2009,
        description: "nicely done2",
        isDeleted: 0,
      },
      {
        id: 4,
        name: "titanic4",
        rating: 2,
        genres: "Romantic4",
        directorName: "StephenC",
        releaseYear: 2020,
        description: "nicely done3",
        isDeleted: 0,
      },
    ],

    favorites: [{}]

    //showDetails: true,
  };

  addMovie = (movie) => {
    const newMovies = [...this.state.movies];
    newMovies.push(movie);
    this.setState({movies: newMovies });
    console.log(newMovies, 'from app');
  };

  updateMovie = (newMovie) => {
    const newMovies = [...this.state.movies];
    let index = this.findIndexById(newMovie.id);
    const updatedMovie = { ...newMovies[index] };
    updatedMovie.name = newMovie.name;
    updatedMovie.releaseYear = newMovie.releaseYear;
    newMovies[index] = updatedMovie;
    this.setState({ movies:newMovies });

  };

  deleteMovie = (id) => {
    const newMovies = [...this.state.movies];
    let index = this.findIndexById(id);
    const deletedMovie = { ...newMovies[index] };
    deletedMovie.isDeleted = 1;
    newMovies[index] = deletedMovie;
    this.setState({ movies:newMovies });
  };

  addToFavorite =(id)=> {
    const newFavorites = [...this.state.favorites];
    const newMovies = [...this.state.movies];
    let index = this.findIndexById(id);
    const favoriteMovie = { ...newMovies[index]}
    //newFavorites[index] = favoriteMovie;
    if(!newFavorites.some(alreadyfavorite => alreadyfavorite.id===favoriteMovie.id)){
      newFavorites.push(favoriteMovie);
      this.setState({ favorites: newFavorites})
      }
  }
 

  findIndexById = (id) => {
    let index = -1;
    for (let i = 0; i < this.state.movies.length; i++) {
      if (this.state.movies[i].id === id) {
        index = i;
        break;
      }
    }
    return index;
  };

  render() {
    const { movies,favorites } = this.state;
 console.log(movies, 'from render');
    return (
      <div className="App">
        <h3> Movies</h3>

        <MovieLists
          movies={movies}
          favorites={favorites}
          updateMovie={this.updateMovie}
          deleteMovie={this.deleteMovie}
          addtoFavorite={this.addToFavorite}
        />

        <AddMovie addMovie={this.addMovie} />

        <p> Where is my movies ?</p>

        {/* <FavoriteMovies addToFavorite={this.addToFavorite}/> */}

      </div>
    );
  }
}
