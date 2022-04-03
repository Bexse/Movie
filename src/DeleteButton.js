import React, { Component } from 'react'

export default class DeleteButton extends Component {

    delete = ()=> {
        this.props.deleteMovie(this.props.id)
    }
  render() {

    return (
      <div>
          {this.props.deleteMovie}
          <button onClick={this.delete}> Delete</button>
      </div>
    )
  }
}
