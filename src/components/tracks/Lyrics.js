import React, { Component } from 'react'
import Spinner from '../layout/Spinner'
import {Link} from 'react-router-dom'
import GenreName from './GenreName'
import Moment from 'react-moment'
import axios from 'axios';

class Lyrics extends Component {

    state = {
        track : {},
        lyrics: {}
    };

    componentDidMount(){
        axios.get('https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id='+this.props.match.params.id+'&apikey='+process.env.REACT_APP_MM_KEY)
        .then(res => {
            this.setState({lyrics: res.data.message.body.lyrics});
            return axios.get('https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id='+this.props.match.params.id+'&apikey='+process.env.REACT_APP_MM_KEY); 
        })
        .then(res => {
            console.log(res.data);
            this.setState({track: res.data.message.body.track});
        })
        .catch(error => console.log(error))
    }

    render() {
        const {track, lyrics} = this.state;
        console.log(track);
        if (track === undefined || 
            lyrics === undefined || 
            Object.keys(track).length === 0 || 
            Object.keys(lyrics).length === 0
        ) {
            return <Spinner />        
        }else{
            return (
                <React.Fragment>
                    <Link to="/" className="btn btn-md mb-4" style={{background:'#00897B', color:'#fff'}}>Go Back</Link>
                    <div className="card shadow-sm bg-white rounded">
                        <h5 className="card-header">
                            {track.track_name} by <span className="text-secondary"> {track.artist_name}</span>
                        </h5>
                        <div className="card-body">
                            <p className="card-text">
                                {lyrics.lyrics_body}
                            </p>
                        </div>
                    </div>
                    <ul className="list-group mt-3 mb-3">
                        <li className="list-group-item">
                            <strong>Album : </strong>{track.album_name}
                        </li>
                        <li className="list-group-item">
                            <GenreName gname={track.primary_genres.music_genre_list[0]}/>
                        </li>
                        <li className="list-group-item">
                            <strong>Explicit Words: </strong>{track.explicit === 0 ? 'No' : 'Yes'}
                        </li>
                        <li className="list-group-item">
                            <strong>Release Date: </strong><Moment format="DD/MM/YYYY">{track.updated_time}</Moment>
                        </li>
                    </ul>
                </React.Fragment>
            );
        }
    }
}

export default Lyrics;
