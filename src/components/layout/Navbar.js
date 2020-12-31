import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar mb-5" style={{background:'#4DB6AC', color:'#4DB6AC'}}>
            <span className="navbar-brand mb-0 h1" style={{color:'white', marginLeft:'90px'}}>
                Lyrix | Lyrics Finder
            </span>
            <a target="_blank" rel="noreferrer" 
                href="https://github.com/arunkumar198857" 
                style={{color:'white', marginRight:'20px'}}>
                    <i className="fab fa-github fa-2x" />
            </a>
        </nav>
    );
}

export default Navbar;
