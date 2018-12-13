import React from 'react'

export default class GifSearch extends React.Component {

    constructor() {
        super()
        this.state = {
            searchValue: ''
        }
    }

    render() {
        return (
            <form onSubmit={e => {
                e.preventDefault();
                this.props.getGifs(this.state.searchValue)
            }}>
                <label>Enter a Search Term: </label>
                <input 
                    id="gif-search" 
                    value={this.state.searchValue}  
                    onChange={e => {
                        e.persist()
                        this.setState({
                            searchValue: e.target.value
                        })
                    }}>
                </input>
                <button type="submit">Find GIFs</button>
            </form>
        )
    }
}