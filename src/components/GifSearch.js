import React, { Component } from "react";

export default class GifSearch extends Component {
  constructor() {
    super();
    this.state = {
      input: ""
    };
  }
  handleChange = event => {
    this.setState({
      input: event.target.value
    });
    this.props.fetchData(this.state.input);
  };

  render() {
    return (
      <div>
        Search Gifs
        <input name="search_term" onChange={this.handleChange} />
      </div>
    );
  }
}
