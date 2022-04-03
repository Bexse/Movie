import React, { Component } from 'react'
import Movie from './Movie';

export default class MovieList extends Component {
  render() {
      const movieLists  = this.props.movies;
       

    return (
      <div>

          {
          movieLists.map(movie => <Movie movie={movie} key={movie.id} addToFavorite={this.props.addToFavorite}/>)
          }
       
      </div>
    )
  }
}


