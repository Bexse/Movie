import React, { Component } from "react";

export default class AddMovie extends Component {
  state = {
    id: "",
    name: "",
    genres: "",
    rating: "",
    releaseYear: "",
    description: "",
    directorName: "",
    isDeleted: 0,
  };

  addMovie = () => {
    let newMovie = {
      id: this.state.id,
      name: this.state.name,
      genres: this.state.genres,
      rating: this.state.rating,
      releaseYear: this.state.releaseYear,
      description: this.state.description,
      directorName: this.state.directorName,
    };
  //console.log(newMovie );
    this.props.addMovie(newMovie);
    this.setState({
      id: "",
      name: "",
      genres: "",
      rating: "",
      releaseYear: "",
      description: "",
      directorName: "",
    });
  };


  myOnChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        Add New Movie 
        <div>
          <input
            placeholder="id"
            name="id"
            value={this.state.id}
            onChange={(event) => this.myOnChange(event)}
          />
        </div>

        <div>
          <input
            placeholder="name"
            name="name"
            value={this.state.name}
            onChange={(event) => this.myOnChange(event)}
          />
        </div>

        <div>
          <input
            placeholder="genres"
            name="genres"
            value={this.state.genres}
            onChange={(event) => this.myOnChange(event)}
          />
        </div>

        <div>
          <input
            placeholder="description"
            name="description"
            value={this.state.description}
            onChange={(event) => this.myOnChange(event)}
          />
        </div>

        <div>
          <input
            placeholder="rating"
            name="rating"
            value={this.state.rating}
            onChange={(event) => this.myOnChange(event)}
          />
        </div>

        <div>
          <input
            placeholder="releaseYear"
            name="releaseYear"
            value={this.state.releaseYear}
            onChange={(event) => this.myOnChange(event)}
          />
        </div>

        <div>
          <input
            placeholder="directorName"
            name="directorName"
            value={this.state.directorName}
            onChange={(event) => this.myOnChange(event)}
          />
        </div>

        <button onClick={this.addMovie}> AddMovie</button>

      </div>
    );
  }
}

