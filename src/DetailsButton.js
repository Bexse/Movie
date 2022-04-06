import React, { Component } from 'react'

export default class DetailsButton extends Component {

    state = {
        isFieldShown: false,
        directorName: this.props.movieDetail.directorName,
        releaseYear: this.props.movieDetail.releaseYear,
        description: this.props.movieDetail.description,
      };
      
      showField = () => {
        this.setState({ isFieldShown: !this.state.isFieldShown });
      };
    
  render() {
    return (
      <div>DetailsButton
 
        <button onClick={this.showField}>Details</button>
        {this.state.isFieldShown && (
          <>
            <span>
              directorName: {this.state.directorName},release_year:
              {this.state.releaseYear}, description: {this.state.description}
            </span>
          </>
        )}

      </div>
    )
  }
}


