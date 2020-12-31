import React, { Component } from 'react'
import axios from 'axios';
import '../../App.css';
import {Consumer} from '../../context';
import search_icon from '../layout/search_icon.svg';

class Search extends Component {

    state = {
        trackTitle: ''
    }

    findTrack = (dispatch, e) => {
        e.preventDefault();
         axios.get('https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track='+this.state.trackTitle+'&page_size=10&page=1&s_track_rating=desc&apikey='+process.env.REACT_APP_MM_KEY)
        .then(res => {
            dispatch({
                type: 'SEARCH_TRACKS',
                payload: res.data.message.body.track_list
            })
            this.setState({trackTitle:''});
        })
        .catch(error => console.log(error))
    }

    onChange = (e) => {
        this.setState({trackTitle: e.target.value});
    }

    render() {
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card card-body mb-2 p-4 shadow-sm p-3 mb-5 bg-white rounded">
                            <h1 className="display-4 text-center">
                                <img src={search_icon} alt="icon" height="50px" width="50px" className="search-icon mb-2"/> Search For A Song
                            </h1>
                            <p className="lead text-center">Get the lyrics for any song!</p>
                            <form onSubmit={this.findTrack.bind(this, dispatch)}>
                                <div className="form-group">
                                    <input type="text" 
                                        placeholder="Song title..." 
                                        className="form-control form-control-lg"
                                        name="trackTitle"
                                        value={this.state.trackTitle}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <button className="btn btn-lg btn-block mt-2" style = {{width: '100%', color: 'white', background: '#00897B'}} type="submit">Get Lyrics</button>
                            </form>
                        </div>
                    );
                }}
            </Consumer>
        )
    }
}

export default Search;