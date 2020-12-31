import React from 'react';
import {Link} from 'react-router-dom';

const Track = (props) =>{

    const { track } = props;

    return(
        <div className="col-md-6">
            <div className="card mb-4 shadow-sm p-3 mb-3 bg-white rounded">
                <div className="card-body">
                    <h5>{track.artist_name}</h5>
                    <p className="card-text">
                        <strong><i className="fas fa-play" /> Track: </strong>{track.track_name}
                        <br/>
                        <strong><i className="fas fa-compact-disc" /> Album: </strong>{track.album_name}
                    </p>
                    <Link to={'lyrics/tracks/'+track.track_id} className="btn btn-block" style={{width: '100%', background: '#00897B', color:'#fff'}}>
                        <i className="fas fa-chevron-right"></i> View lyrics
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Track;