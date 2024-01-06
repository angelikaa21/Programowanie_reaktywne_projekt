import React from 'react';
import { Link } from 'react-router-dom';
import './navListItem.css';

function NavListItem({ nav }) {
    return (
        <li>
            <Link to={nav.link}>{nav.name}</Link>
        </li>
    );
}

export default NavListItem;
