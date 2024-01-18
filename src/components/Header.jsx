import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavListItem from "./NavListItem";
import navListData from "./navListData";
import './header.css';
import Search from "./Search";
import SearchResults from "./SearchResults";

function Header() {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [filteredMovies, setFilteredMovies] = useState([]);

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

    const handleSearch = (results) => {
        setFilteredMovies(results);
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
            <Search onSearch={handleSearch} />
            {filteredMovies.length > 0 && (
                <SearchResults
                    filteredMovies={filteredMovies}
                />
            )}
        </header>
    );
}

export default Header;