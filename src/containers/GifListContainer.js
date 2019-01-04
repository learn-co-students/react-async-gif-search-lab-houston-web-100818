import React, { Component } from "react";
import GifSearch from "../components/GifSearch";
import GifList from "../components/GifList";

export default class GifListContainer extends Component {
  constructor() {
    super();
    this.state = {
      gifs: []
    };
  }

  fetchData = searchTerm => {
    fetch(
      `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`
    )
      .then(response => response.json())
      .then(gifs =>
        this.setState(state => {
          state.gifs = gifs.data.slice(0, 3);
          return state;
        })
      );
  };
  render() {
    return (
      <div>
        <GifSearch fetchData={this.fetchData} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}
