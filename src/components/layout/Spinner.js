import React from 'react';
import spinner from './spinner.gif';

const Spinner = () => {
    return(
        <div>
            <img 
                src = {spinner}
                alt = "Loading..."
                style ={{width:'50px', margin: '40px auto', display: 'block', background:'#E0F2F1', color:'#E0F2F1'}}
            />
        </div>
    );
};

export default Spinner;