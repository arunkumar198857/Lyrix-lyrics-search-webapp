import React from 'react'

const GenreName = (props) => {
    if(props.gname === undefined){
        return (
            <div><strong>Music Genre: </strong>Music</div>
        )
    }else{
        return (
            <div><strong>Music gere: </strong>{props.gname.music_genre.music_genre_name}</div>
        );
    }
}

export default GenreName;
