import React, { Component } from "react";

export default class AddtoFavorite extends Component {
  

  addFav =() =>{
    this.props.addtoFavorite(this.props.id)
  }


  render() {
    return (
      <div>
        AddtoFavorite
        <button onClick={this.addFav}>AddtoFavorite</button>
      </div>
    );
  }
}
