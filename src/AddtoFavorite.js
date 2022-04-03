import React, { Component } from 'react'

export default class AddtoFavorite extends Component {
  render() {

    return (
      <div>
   
          {this.props.addToFavorite}
          <button onClick={this.addToFavorite}> Add to Favorite</button>

      </div>
    )
  }
}
