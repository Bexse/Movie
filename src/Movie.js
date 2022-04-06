import React, { Component } from "react";
import UpdateMovie from "./UpdateMovie";
import DeleteMovie from "./DeleteMovie";
import DetailsButton from "./DetailsButton";
import AddtoFavorite from "./AddtoFavorite";

export default class Movie extends Component {
  render() {
    return (
      <div>
        Movie component
        <div>
          <p>
            <span>{this.props.movie.id} </span>
            <span>{this.props.movie.name} </span>
            <span> {this.props.movie.genres} </span>
            <span> {this.props.movie.rating} </span>
            {/* <span> {this.props.movie.directorName} </span>
            <span> {this.props.movie.releaseYear} </span>
            <span> {this.props.movie.description} </span> */}
          </p>
        </div>
        <DetailsButton
          id={this.props.movie.id}
          movieDetail={this.props.movie}
        />
        <UpdateMovie
          updateMovie={this.props.updateMovie}
          id={this.props.movie.id}
        />
        <DeleteMovie
          deleteMovie={this.props.deleteMovie}
          id={this.props.movie.id}
        />
        <AddtoFavorite addtoFavorite={this.props.addtoFavorite} id={this.props.movie.id}/>
      </div>
    );
  }
}
