import React from 'react';

const Navbar = () => {
    return (
        <nav className='nav'>
            <ul className='list'>
                <li>
                    <a href='#'>Profile</a>
                </li>
                <li>
                    <a href='#'>Messages</a>
                </li>
                <li>
                    <a href='#'>News</a>
                </li>
                <li>
                    <a href='#'>Music</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;