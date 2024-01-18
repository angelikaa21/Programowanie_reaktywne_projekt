import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import './search.css';

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const location = useLocation();

  useEffect(() => {

    setSearchTerm('');
  }, [location.pathname]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (searchTerm) {
          setIsSearching(true);
          const response = await axios.get(`https://at.usermd.net/api/movies`);
          const filteredMovies = response.data.filter((movie) =>
            movie.title.toLowerCase().includes(searchTerm.toLowerCase())
          );
          onSearch(filteredMovies);
        } else {
          onSearch([]);
        }
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setIsSearching(false);
      }
    };

    fetchData();
  }, [searchTerm, onSearch]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <ion-icon name="search-outline"></ion-icon>
      {isSearching && <span>Searching...</span>}
    </div>
  );
};

export default Search;