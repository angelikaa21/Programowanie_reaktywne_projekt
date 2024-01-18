import React from 'react';
import { NavLink } from 'react-router-dom';
import './SearchResults.css';

const SearchResults = ({ filteredMovies, onClick}) => {

  return (
    <div className='search-results-container'>
      <ul className='search-results'>
        {filteredMovies.map(movie => (
          <li key={movie.id}>
            <NavLink
              to={`/details/${encodeURIComponent(movie.title)}/${movie.id}`}
              className='nav-link'
              onClick={onClick}
            >
              {movie.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
