import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavListItem from "./NavListItem";
import navListData from "./navListData";
import './header.css';
import Search from "./Search";

function Header() {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        navigate('/');
    };

    return (
        <header>
            <Link to="/" className="logo">
                Movies
            </Link>
            <ul className="nav">
                {navListData.map(nav => (
                    <NavListItem key={nav.id} nav={nav} isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
                ))}
            </ul>
            <Search />
        </header>
    );
}

export default Header;

