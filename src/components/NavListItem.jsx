import React from 'react';
import { Link } from 'react-router-dom';
import './navListItem.css';

function NavListItem({ nav, isLoggedIn, handleLogout }) {
    const handleClick = () => {
        if (nav.link === '/signin' && isLoggedIn) {
            handleLogout();
        }
    };

    const linkTo = isLoggedIn
        ? nav.link === '/signin'
            ? '/'
            : nav.link === '/signup'
                ? '/add'
                : nav.link
        : nav.link;

    return (
        <li>
            <Link to={linkTo} onClick={handleClick}>
                {isLoggedIn && nav.link === '/signin'
                    ? 'Log Out'
                    : nav.link === '/signup' && isLoggedIn
                        ? 'Add movie'
                        : nav.name
                }
            </Link>
        </li>
    );
}

export default NavListItem;
