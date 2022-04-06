// import React, { Component } from "react";

export default class FavoriteMovies extends Component {
  render() {
    return (
      <div>
        FavoriteMovies will be displayed here
        {this.props.favorites.id}
        {/* {this.props.favorites
          .filter(fav => fav.isDeleted === 0)
          .map(fav => (
            <div>
              <p>
                <span>{this.props.fav.id} </span>
                <span>{this.props.fav.name} </span>
                <span> {this.props.fav.genres} </span>
                <span> {this.props.fav.rating} </span>
              </p>
            </div>
          ))
          
          } */}
      </div>
    );
  }
}
