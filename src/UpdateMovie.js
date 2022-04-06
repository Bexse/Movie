import React, { Component } from "react";

export default class UpdateMovie extends Component {
  state = {
    name: "",
    releaseYear: "",
  };

  update = () => {
    let newMovie = {
      name: this.state.name,
      releaseYear: this.state.releaseYear,
    };
    this.props.updateMovie(newMovie);
    this.setState({name:'', releaseYear:''})
  };

  OnChangeEdit= (event)=> {
    this.setState({[event.target.name]:event.target.value})
  };

  render() {
    return (
      <div>
        UpdateMovie
        <div>
          <input
            placeholder="name"
            name="name"
            value={this.state.name}
            onChange={(event) => this.OnChangeEdit(event)}
          />
        </div>

        <div>
          <input
            placeholder="releaseYear"
            name="releaseYear"
            value={this.state.releaseYear}
            onChange={(event) => this.OnChangeEdit(event)}
          />
        </div>

        <button onClick={this.update}>Update</button>
      </div>
    );
  }
}
