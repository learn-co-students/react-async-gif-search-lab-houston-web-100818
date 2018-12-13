import React from 'react'

export default class GifList extends React.Component {

    render() {
        console.log(this.props.gifs)
        return(
            <ul>
                {this.props.gifs.map(gif => {
                    return <li><img src={gif.images.original.url} alt="gif here" /></li>
                })}
            </ul>
        )
    }
}