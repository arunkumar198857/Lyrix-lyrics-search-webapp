import React from 'react';
import '../../App.css'

const Navbar = () => {
    return (
        <nav className="navbar mb-5" style={{background:'#4DB6AC', color:'#4DB6AC'}}>
            <span className="navbar-brand mb-0 h1 mx-auto" style={{color:'white'}}>
                Lyrix | Lyrics Finder
            </span>
        </nav>
    );
}

export default Navbar;
