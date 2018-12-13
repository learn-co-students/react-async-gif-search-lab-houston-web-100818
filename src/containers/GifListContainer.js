import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {

    constructor() {
        super()
        this.state = {
            gifs: []
        }
    }

    getGifs = (query) => {
        fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(resp => resp.json())
        .then(gifs => {
            this.setState({
                gifs: [gifs.data[0], gifs.data[1], gifs.data[2]]
            })
        })
    }

    render() {
        return (
            <div>
                <GifSearch getGifs={this.getGifs} />
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }
}