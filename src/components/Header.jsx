import React from "react";
import NavListItem from "./NavListItem";
import navListData from "./navListData";
import './header.css';
import Search from "./Search";

function Header() {
    return (
    <header>
        <a href="/" className="logo">
            Movies
        </a>
        <ul className="nav">
            {navListData.map(nav => (
                <NavListItem key={nav._id} nav={nav} />
            ))}
        
        </ul>
        <Search />
    </header>
    );
}

export default Header