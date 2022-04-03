import React, { Component } from "react";
import AddtoFavourite from "./AddtoFavorite"
import DeleteButton from "./DeleteButton"
export default class Movie extends Component {
  render() {
    return (
      <div>
        <span>name: {this.props.movie.name}</span>
        <span>rating: {this.props.movie.rating}</span>
        <span>genres: {this.props.movie.genres}</span>
        <span>director: {this.props.movie.director}</span>
        <span>releaseYear: {this.props.movie.releaseYear}</span>
        <span>description: {this.props.movie.description}</span>

        <DeleteButton deleteMovie={this.props.deleteMovie} />
        <AddtoFavourite addToFavorite={this.props.addToFavorite}/>
      </div>
    );
  }
}
