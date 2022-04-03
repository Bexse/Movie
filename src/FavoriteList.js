import React, { Component } from "react";

export default class FavoriteList extends Component {

  state = {
    favorites:[]
  }
  render() {
    
    return (
      <div>
       List of Favorite Movies
       <button> Display Favorite Movies</button>
      </div>
    );
  }
}
