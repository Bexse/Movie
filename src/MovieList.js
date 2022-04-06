import React, { Component } from "react";
import Movie from "./Movie";

export default class MovieLists extends Component {
  render() {
   

    return (
      <div>
            
        MovieLists components
        {this.props.movies
        .filter(movie => movie.isDeleted === 0)
        .map(movie => (
          <Movie
            movie={movie}
           
            key={movie.id}
            updateMovie={this.props.updateMovie}
            deleteMovie={this.props.deleteMovie}
            addtoFavorite={this.props.addtoFavorite}
          />
        ))}
 
        {this.props.favorites.map(fav=>(fav.id))}
      </div>
    );
  }
}


